import { useState } from "react";
import chunk from "lodash/chunk";
import reduce from "lodash/reduce";
import range from "lodash/range";
import memo from "../helpers/memo";

type ToggledListItemKey = string | number;
export interface ToggledListItem {
  key: ToggledListItemKey;
  label: string;
  toggled?: boolean;
  rowToggled?: boolean;
  colToggled?: boolean;
}

function useToggleList(list: ToggledListItem[]): [ToggledListItem[], Function, Function] {
  const [toggledList, setToggledList] = useState(list);

  function toggleListItem(key: ToggledListItemKey) {
    let list = [...toggledList];
    const listItem = list.find((listItem) => listItem.key === key);
    if (!listItem) {
      return;
    }

    listItem.toggled = !listItem.toggled;
    list = memoAssignToggledStateToListItems(list);

    setToggledList(list);
  }

  return [toggledList, setToggledList, toggleListItem];
}

function assignToggledStateToListItems(list: ToggledListItem[]) {
  const size = Math.ceil(Math.sqrt(list.length));

  const rows = chunk(list, size);
  const cols = reduce(
    list,
    (acc, item, index) => {
      acc[index % size].push(item);
      return acc;
    },
    range(size).map((_) => []) as ToggledListItem[][]
  );

  for (let row of rows) {
    list = assignLineToggled(row, list, "rowToggled");
  }
  for (let col of cols) {
    list = assignLineToggled(col, list, "colToggled");
  }

  return list;
}
const memoAssignToggledStateToListItems = memo(assignToggledStateToListItems);

function assignLineToggled(
  line: ToggledListItem[],
  list: ToggledListItem[],
  field: "rowToggled" | "colToggled"
) {
  let toggled = true;
  for (let item of line) {
    if (!item.toggled) {
      toggled = false;
    }
  }

  const lineKeys = line.map((item) => item.key);
  for (let item of list.filter((item) => lineKeys.includes(item.key))) {
    item[field] = toggled;
  }

  return list;
}

export default useToggleList;

import { GameListItem } from "./types";
import chunk from "lodash/chunk";
import reduce from "lodash/reduce";
import range from "lodash/range";

export const assignToggledStateToListItems = (list: GameListItem[]) => {
  const size = Math.ceil(Math.sqrt(list.length));

  const rows = chunk(list, size);
  const cols = reduce(
    list,
    (acc, item, index) => {
      acc[index % size].push(item);
      return acc;
    },
    range(size).map((_) => []) as GameListItem[][]
  );

  for (let row of rows) {
    list = assignLineToggled(row, list, "rowToggled");
  }
  for (let col of cols) {
    list = assignLineToggled(col, list, "colToggled");
  }

  return list;
};

const assignLineToggled = (
  line: GameListItem[],
  list: GameListItem[],
  field: "rowToggled" | "colToggled"
) => {
  let toggled = true;
  for (let item of line) {
    if (!item.toggled) {
      toggled = false;
    }
  }

  const lineIds = line.map((item) => item.id);
  for (let item of list.filter((item) => lineIds.includes(item.id))) {
    item[field] = toggled;
  }

  return list;
};

export const calcLinesForItems = (list: GameListItem[]) => {
  const size = Math.ceil(Math.sqrt(list.length));
  const cols = Math.ceil(list.filter((item) => item.colToggled).length / size);
  const rows = Math.ceil(list.filter((item) => item.rowToggled).length / size);

  return cols + rows;
};

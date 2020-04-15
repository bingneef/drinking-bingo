import styled, { CreateStyled } from "@emotion/styled";
import base from "./base";

export type ThemeType = typeof base;

export default styled as CreateStyled<ThemeType>;

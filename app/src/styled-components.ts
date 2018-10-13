import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

interface ThemeInterface {
  primary?: boolean;
  hide?: boolean;
  success?: boolean;
  danger?: boolean;
}

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, keyframes, ThemeProvider };
export default styled;

import { initialize, mswDecorator } from "msw-storybook-addon";
import { FilesContextWrapper } from "../src/test-utils/FilesContextWrapper";
import "../src/app.css";

// Initialize MSW
initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  mswDecorator,
  (Story) => (
    <FilesContextWrapper>
      <Story />
    </FilesContextWrapper>
  ),
];

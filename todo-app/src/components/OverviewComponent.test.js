//This test check if OverviewComponent render.
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { expect, test } from "@jest/globals";
import OverviewComponent from "./OverviewComponent";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};

describe("Overview Component", () => {
  const store = mockStore(initialState);

  test("should render Overview Component", () => {
    const overViewContent = {
      overview: "Overview",
      taskListItems: [
        { text: "Text" },
      ],
      howToList: [
        { text: "Text" },
      ],
    };
    render(
      <Provider store={store}>
        <OverviewComponent overViewContent={overViewContent} />
      </Provider>
    );
    const headerText = screen.getByText("Overview");
    expect(headerText).toBeInTheDocument();
  });
});

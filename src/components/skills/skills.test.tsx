import React from "react";
import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./skills";

describe("Testing Skills Component", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("Skills renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElements = screen.getByRole("list");
    expect(listElements).toBeInTheDocument();
  });
  test("Skills list renders correctly", () => {
    render(<Skills skills={skills} />);
    const listitemElements = screen.getAllByRole("listitem");
    expect(listitemElements).toHaveLength(skills.length);
  });
  test("render login button", () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.getByRole("button", { name: "Login" });
    expect(buttonElement).toBeInTheDocument();
  });
  test("start learning button not render", () => {
    render(<Skills skills={skills} />);
    const startbuttonElement = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startbuttonElement).not.toBeInTheDocument();
  });
  test("Start Learning button is eventually displayed", async () => {
    // const view = render(<Skills skills={skills} />);
    // logRoles(view.container);
    // screen.debug();
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});

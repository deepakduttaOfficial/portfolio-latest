import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import certificates from "./data/certificate";
import projects from "./data/project";

it("renders the portfolio content and preserves external destinations", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Deepak Dutta" })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
    "href",
    "#main-content"
  );
  expect(
    screen.getByRole("navigation", { name: "Primary navigation" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", {
      name: "Copy Deepak Dutta's email address",
    })
  ).toBeInTheDocument();

  projects.forEach((project) => {
    expect(
      screen.getByRole("link", { name: `Open ${project.title} live site` })
    ).toHaveAttribute("href", project.deploy);
    expect(
      screen.getByRole("link", { name: `Open ${project.title} source code` })
    ).toHaveAttribute("href", project.source);
  });

  certificates.forEach((certificate) => {
    expect(
      screen.getByRole("link", {
        name: `View ${certificate.title} certificate`,
      })
    ).toHaveAttribute("href", certificate.link);
  });

  screen
    .getAllByRole("link")
    .filter((link) => link.target === "_blank")
    .forEach((link) => {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
});

it("opens the mobile navigation from its accessible menu control", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", { name: "Open navigation menu" })
  );

  expect(
    screen.getByRole("navigation", { name: "Mobile navigation" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Close navigation menu" })
  ).toHaveAttribute("aria-expanded", "true");
});

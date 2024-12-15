import { render, screen, waitFor } from "@testing-library/react";
import { AnimatedElement } from "./animated-element";
import { describe, expect, test } from "vitest";
import { composeStories } from "@storybook/nextjs";
import * as Stories from "./animated-element.stories";

const { Title, Paragraph } = composeStories(Stories);

describe("AnimatedElement", () => {
  describe("Title Story", () => {
    test("renders with correct heading level and content", async () => {
      await Title.run();
      const element = screen.getByText("Fast, Robust, and Elegant UI.");
      expect(element.tagName).toBe("H1");
    });

    test("applies correct classes", async () => {
      await Title.run();
      const element = screen.getByText("Fast, Robust, and Elegant UI.");
      expect(element).toHaveClass("font-knewave", "text-5xl", "text-center");
    });

    test("applies correct animation properties", async () => {
      await Title.run();
      //   const element = screen.getByText("Fast, Robust, and Elegant UI.");
      const element = await screen.findByText("Fast, Robust, and Elegant UI.");
      await waitFor(
        () => {
          expect(element).toHaveStyle({ opacity: 1 });
        },
        { timeout: 1500 } // slightly longer than animation duration + delay
      );
    });
  });

  describe("Paragraph Story", () => {
    test("renders with correct paragraph element and content", async () => {
      await Paragraph.run();
      const element = screen.getByText(
        "Crafting custom interfaces that blend speed, durability, and style for an exceptional user experience."
      );
      expect(element.tagName).toBe("P");
    });

    test("applies correct classes", async () => {
      await Paragraph.run();
      const element = screen.getByText(
        "Crafting custom interfaces that blend speed, durability, and style for an exceptional user experience."
      );
      expect(element).toHaveClass(
        "text-center",
        "text-xl",
        "leading-6",
        "mx-auto",
        "italic"
      );
    });

    test("applies correct animation properties", async () => {
      await Paragraph.run();
      const element = await screen.findByText(
        "Crafting custom interfaces that blend speed, durability, and style for an exceptional user experience."
      );
      await waitFor(
        () => {
          expect(element).toHaveStyle({ opacity: 1 });
        },
        { timeout: 1500 } // slightly longer than animation duration + delay
      );
    });
  });

  // Keep existing generic component tests
  test("renders with default element type (div)", () => {
    render(<AnimatedElement>Test content</AnimatedElement>);
    const element = screen.getByText("Test content");
    expect(element.tagName).toBe("DIV");
  });

  test("renders with specified element type", () => {
    render(<AnimatedElement as="h1">Heading content</AnimatedElement>);
    const element = screen.getByText("Heading content");
    expect(element.tagName).toBe("H1");
  });

  test("applies custom className", () => {
    render(<AnimatedElement className="test-class">Content</AnimatedElement>);
    const element = screen.getByText("Content");
    expect(element).toHaveClass("test-class");
  });

  test("passes animation props correctly", async () => {
    const animationProps = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
    };

    render(
      <AnimatedElement {...animationProps}>Animated content</AnimatedElement>
    );

    const element = await screen.findByText("Animated content");
    await waitFor(
      () => {
        expect(element).toHaveStyle({ opacity: 1 });
      },
      { timeout: 1500 } // slightly longer than animation duration + delay
    );
  });

  test("renders children correctly", () => {
    render(
      <AnimatedElement>
        <span>Child element</span>
      </AnimatedElement>
    );

    expect(screen.getByText("Child element")).toBeInTheDocument();
  });
});

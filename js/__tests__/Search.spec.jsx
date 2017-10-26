import React from "react";
import { shallow } from "enzyme";
import preload from "../../data.json";
import Search from "../Search";
import ShowCard from "../ShowCard";

test("Search renders correctly", () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component).toMatchSnapshot();
});

test("Search should render correct amount of shows", () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test("Search should render correct amout of shows based on search term", () => {
  const component = shallow(<Search shows={preload.shows} />);
  const searchWord = "black";
  // should give that input a classname to be more specific
  component.find("input").simulate("change", { target: { value: searchWord } });
  // reusing this search algo is a bad idea, should put it into its own module, test that and then bring it in here
  const showCount = preload.shows.filter(
    show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0,
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});

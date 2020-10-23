import React from "react";
import { IconButton } from "../Button/IconButton";
import { SearchIcon } from "../icons";

interface SearchInputProps {}

export type SearchInputSignature = (
  props: SearchInputProps
) => React.ReactElement;

export const SearchInput: SearchInputSignature = () => {
  return (
    <div className="flex relative text-gray-600">
      <input
        type="search"
        name="serch"
        placeholder="Search"
        className="inline-flex bg-white w-auto h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:shadow-outline border-pink-400 border"
      />
      <IconButton
        outlined
        type="submit"
        className="inline-flex absolute"
        radius="rounded-full"
        icon={SearchIcon}
      ></IconButton>
    </div>
  );
};

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Date Added" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (sortOrders) => sortOrders.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sortOrder.value)}
            key={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

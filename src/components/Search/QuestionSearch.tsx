import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { SearchIcon } from "lucide-react";

const QuestionSearch = () => {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Search for questions..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default QuestionSearch;

import { Meals } from "@/lib/definitions";
import MealsItem from "./meals-item";

const MealsGrid = ({ meals }: { meals: Meals[] }) => {
  return (
    <ul className="w-[90%] m-w-[90rem] grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-20 my-8 mx-auto p-0">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealsItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;

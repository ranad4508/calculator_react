import { Fragment, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  // let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const message = items.length == 0 ? <p>No item found</p> : null;
  // const getMessage = () =>{
  //     return items.length == 0 ? <p>No item found</p> : null;
  // }

  //============ Entensions ============
  //ES7 + react/redux
  //console ninja
  //auto close tag

  return (
    /*
            <Fragment></Fragment>
            <></>
            here both are same, they allow multiple elements, 
            otherwise react components doesnot allow more than one elements
            in single components
            */
    <Fragment>
      <h1>{heading}</h1>
      {/* another way */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

function ListItems(props) {
    return (
      <ul>
        <li>
         <h4> Task:{props.task}, Deadline:{props.deadline}</h4>
        </li>
      </ul>
    )
  }

export default ListItems; 
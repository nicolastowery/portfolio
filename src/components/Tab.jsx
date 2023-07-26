function Tab({ title, onClick }) {
  return <button onClick={() => onClick(title)}>{title}</button>;
}

export default Tab;

export default function StudyList({ items }) {
  const dataList = items.map((item) => (
    <li key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      <p>{item.category}</p>
    </li>
  ));
  console.log(dataList);
  return <>{dataList}</>;
}

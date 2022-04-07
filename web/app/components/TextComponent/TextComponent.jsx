export const TextComponent = ({ data }) => {
  let i = 0;
  return (
    <>
      <h1>{data[0]?.name}</h1>
      {data[0].content.map((children) => {
        i++;
        return (
          <p key={i}>
            {children.children[0].text}
            <br />
          </p>
        );
      })}
    </>
  );
};

export default TextComponent;

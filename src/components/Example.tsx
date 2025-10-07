const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-1 rounded-md bg-red-200 p-10">
      <div className="w-1/2 bg-green-200 p-5 text-center">{props.text1}</div>
      <div className="flex w-1/2 flex-row items-center justify-center gap-1">
        <div className="m-5 w-full rounded-full bg-blue-200 p-5 text-center">
          {props.text2}
        </div>
        <div className="m-5 w-full rounded-full bg-blue-500 p-5 text-center">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
      <div className="w-1/2 bg-green-200 p-5 text-center">{props.text3}</div>
    </div>
  );
};
export default Example;

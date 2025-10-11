const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-10 rounded-lg bg-red-200 p-10">
      <div className="w-1/2 bg-blue-200 p-5 text-center text-2xl">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row content-center gap-5">
        <div className="w-1/2 rounded-full bg-blue-300 p-5 text-center text-2xl">
          {props.text2}
        </div>
        <div className="w-1/2 rounded-full bg-blue-400 p-5 text-center text-2xl">
          {props.text2}
        </div>
      </div>
      <div className="w-1/2 bg-blue-500 p-5 text-center text-2xl text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;

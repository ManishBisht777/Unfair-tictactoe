type Props = {
  index: number;
  onClick(event: any): void;
  player?: string;
};

function Square({ index, onClick, player }: Props) {
  return (
    <div className="cell" data-cell-index={index} {...{ onClick }}>
      <span data-cell-index={index}>{player}</span>
    </div>
  );
}

export default Square;

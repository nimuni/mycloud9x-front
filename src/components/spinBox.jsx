// VAC 패턴 예시
const SpinBox = () => {
  const [value, setValue] = useState(0);

  const SpinBoxProps = {
      value,
      onDecrease: () => { setValue(value - 1) },
      onIncrease: () => { setValue(value + 1) },
  };

  return <SpinBoxView {...SpinBoxProps} />
}

// view 코드
const SpinBoxView = ({value, onDecrease, onIncrease}) => {
  <div>
    <button onClick={onDecrease}>-</button>
    <span>{value}</span>
    <button onClick={onIncrease}>+</button>
  </div>
}
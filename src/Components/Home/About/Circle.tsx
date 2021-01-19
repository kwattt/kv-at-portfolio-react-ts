interface Colort {
  color: string;
}

const Circle = ({color}: Colort) => {

    return (
      <svg>
        <circle strokeWidth={0.4} stroke="gray" cx={30} cy={30} r={7} fill={color} />
      </svg>
    )
}
export default Circle;
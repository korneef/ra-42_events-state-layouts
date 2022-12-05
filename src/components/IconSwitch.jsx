export default function IconSwitch(props) {
  return <button className="switch-button material-icons" onClick={props.onSwitch}>{props.icon}</button>
}
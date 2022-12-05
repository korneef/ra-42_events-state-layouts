import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsViev from "./CardsViev";
import ListViev from "./ListViev";

export default function Store(props) {
  const [iconState, setIcon] = useState('view_list')
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  const onSwitch = () => {
    iconState === 'view_list' ? setIcon('view_module') : setIcon('view_list')
  }
  
  return (
    <div className="wrapper">
      <IconSwitch icon={iconState} onSwitch={onSwitch} />
      {(iconState === 'view_list') ? <CardsViev cards={products} /> : <ListViev items={products} />}
    </div>
  )
}
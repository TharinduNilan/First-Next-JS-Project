import style from './page.module.css'

export default function Home() {
  return (
<div className={style.container}>
  <h1 style={{marginTop:'50px', marginLeft:'50px'}}>Home</h1>
  <p className={style.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi perferendis nesciunt at quis! Iste facere voluptatem cupiditate alias, accusamus tempora inventore repellendus molestiae nobis, corporis non odio laudantium voluptatibus?</p>
</div>
  );
}

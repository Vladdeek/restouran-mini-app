import DishTypes from '../components/DishTypes'
import Header from '../components/Header'
import MenuCard from '../components/MenuCard'
import { useNavigate } from 'react-router-dom'
const Main = () => {
	const navigate = useNavigate()
	return (
		<>
			<Header>
				<img
					className='rounded-full w-10 h-10'
					src='https://i.pinimg.com/736x/99/49/9e/99499e2bf94b2a71838d7405f9badb32.jpg'
					alt=''
				/>
				<p className='text-2xl font-thin'>Tunaki</p>
				<img
					onClick={() => navigate('/orders')}
					className='rounded-full w-10 h-10 opacity-33 p-1'
					src='assets/icons/shopping-basket.svg'
					alt=''
				/>
			</Header>

			<div className='p-4'>
				<div className='flex justify-between items-center mb-3'>
					<p className='text-xl font-semibold'>Рекомендуемые</p>
					<p
						className='text-md font-light opacity-33'
						onClick={() => navigate('/all')}
					>
						Смотреть все
					</p>
				</div>
				<div className='flex overflow-x-auto gap-3'>
					<DishTypes
						DishTypes_name={'Роллы'}
						DishTypes_img_path={'assets/images/ролл.png'}
					/>
					<DishTypes
						DishTypes_name={'Суши'}
						DishTypes_img_path={'assets/images/суши.png'}
					/>
					<DishTypes
						DishTypes_name={'Лапша'}
						DishTypes_img_path={'assets/images/рамен.png'}
					/>
				</div>
				<img
					className='relative rounded-4xl bg-black mx-auto w-[97.5%] h-35 my-3 object-cover overflow-hidden'
					src='assets/images/баннер.png'
					alt=''
				/>
				<div className='grid grid-cols-2 gap-3'>
					<MenuCard
						food_item_name={'Запеченный ролл с лососем с крабом'}
						food_item_price={700}
					/>
					<MenuCard
						food_item_name={'Филадельфия с крветкой '}
						food_item_price={750}
					/>
					<MenuCard
						food_item_name={'Филадельфия с лососем'}
						food_item_price={700}
					/>
				</div>
			</div>
		</>
	)
}

export default Main

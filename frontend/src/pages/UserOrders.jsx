import { useState } from 'react'
import Header from '../components/Header'
import OrderCard from '../components/OrderCard'
import { useNavigate } from 'react-router-dom'

const UserOrders = () => {
	const [deliveryType, setDeliveryType] = useState(null) // 'pickup' или 'delivery'
	const [deliveryOption, setDeliveryOption] = useState('now') // 'now' или 'later'
	const [customTime, setCustomTime] = useState('')
	const navigate = useNavigate()

	// Минимальное время: +20 мин для самовывоза, +40 мин для доставки
	const getMinTime = (isPickup = false) => {
		const now = new Date()
		now.setMinutes(now.getMinutes() + (isPickup ? 20 : 40))
		return now.toTimeString().slice(0, 5)
	}

	return (
		<>
			<Header>
				<img
					onClick={() => navigate('/')}
					className='h-10 w-10'
					src='assets/icons/chevron-left.svg'
					alt='Назад'
				/>
			</Header>

			<div className='p-4 pb-20'>
				<h1 className='ml-3 text-3xl font-bold mb-3'>Твой заказ</h1>
				<div className='grid gap-3 overflow-y-auto h-80'>
					<OrderCard
						food_item_name={'Запеченный ролл с лососем с крабом'}
						food_item_price={700}
						food_item_count={3}
					/>
					<OrderCard
						food_item_name={'Запеченный ролл с угрем'}
						food_item_price={650}
						food_item_count={2}
					/>
					<OrderCard
						food_item_name={'Запеченный ролл с угрем'}
						food_item_price={650}
						food_item_count={2}
					/>
				</div>

				<footer className='mt-6 space-y-4'>
					{/* Блок выбора типа получения */}
					<div className='space-y-2'>
						<p className='font-medium'>Как получите заказ?</p>
						<div className='flex gap-2'>
							<button
								onClick={() => setDeliveryType('delivery')}
								className={`flex-1 py-2 px-4 rounded-lg  font-medium transition-colors
                  ${
										deliveryType === 'delivery'
											? 'bg-black  text-white'
											: 'bg-stone-300  text-stone-700'
									}`}
							>
								Доставка
							</button>
							<button
								onClick={() => setDeliveryType('pickup')}
								className={`flex-1 py-2 px-4 rounded-lg  font-medium transition-colors
                  ${
										deliveryType === 'pickup'
											? 'bg-black  text-white'
											: 'bg-stone-300  text-stone-700'
									}`}
							>
								Самовывоз
							</button>
						</div>
					</div>

					{/* Блок выбора времени (показывается всегда после выбора типа) */}
					{deliveryType && (
						<div className='space-y-2'>
							<p className='font-medium'>
								{deliveryType === 'pickup'
									? 'Когда заберёте?'
									: 'Время доставки:'}
							</p>
							<div className='flex gap-2'>
								<button
									onClick={() => setDeliveryOption('now')}
									className={`flex-1 py-2 px-4 rounded-lg  font-medium transition-colors
                    ${
											deliveryOption === 'now'
												? 'bg-black  text-white'
												: 'bg-stone-300  text-stone-700'
										}`}
								>
									Как можно скорее
								</button>
								<button
									onClick={() => setDeliveryOption('later')}
									className={`flex-1 py-2 px-4 rounded-lg  font-medium transition-colors
                    ${
											deliveryOption === 'later'
												? 'bg-black  text-white'
												: 'bg-stone-300  text-stone-700'
										}`}
								>
									На время
								</button>
							</div>

							{deliveryOption === 'later' && (
								<div className='mt-2'>
									<input
										type='time'
										value={customTime}
										onChange={e => setCustomTime(e.target.value)}
										className='w-full p-2 border-2 border-stone-300 rounded-lg'
										min={getMinTime(deliveryType === 'pickup')}
									/>
									<p className='text-xs text-stone-500 mt-1'>
										Минимальное время: {getMinTime(deliveryType === 'pickup')}
										{deliveryType === 'pickup'
											? ' (через 20 минут)'
											: ' (через 40 минут)'}
									</p>
								</div>
							)}
						</div>
					)}

					{/* Блок общей стоимости */}
					<div className='flex justify-between pt-4 border-t border-stone-200'>
						<p className='font-semibold text-lg'>Стоимость заказа</p>
						<p className='font-extrabold text-lg'>2100 ₽</p>
					</div>

					{/* Кнопка подтверждения */}
					<button
						className={`w-full py-3 rounded-lg font-bold text-lg mt-4
              ${
								deliveryType
									? 'bg-black text-white'
									: 'bg-stone-300 text-stone-500 cursor-not-allowed'
							}`}
						disabled={!deliveryType}
					>
						{deliveryType === 'pickup'
							? 'Забронировать самовывоз'
							: 'Оформить доставку'}
					</button>
				</footer>
			</div>
		</>
	)
}

export default UserOrders

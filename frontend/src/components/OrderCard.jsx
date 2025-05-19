const OrderCard = ({
	food_item_name,
	food_item_price,
	food_item_img_path,
	food_item_count,
}) => {
	return (
		<>
			<div className='bg-[#fefefe] rounded-4xl p-4 flex'>
				<img
					className='rounded-2xl'
					src={!food_item_img_path && 'https://placehold.co/100x100.png'}
					alt=''
				/>
				<div className='flex flex-col justify-between mx-2'>
					<p className='mx-1 font-semibold text-md'>{food_item_name}</p>
					<p className='mx-1 font-bold text-md'>₽ {food_item_price}</p>
				</div>
				<div className='flex items-center gap-1'>
					<input
						type='number'
						className='h-6 w-7 border-1 rounded-md text-center'
						value={food_item_count}
					/>
					<p className='self-center opacity-30 text-nowrap'>X</p>
				</div>
			</div>
		</>
	)
}
export default OrderCard

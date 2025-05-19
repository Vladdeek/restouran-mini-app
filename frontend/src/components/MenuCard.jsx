const MenuCard = ({ food_item_name, food_item_price, food_item_img_path }) => {
	return (
		<>
			<div className='bg-[#fefefe] rounded-4xl p-4 flex flex-col'>
				<img
					className='rounded-2xl'
					src={!food_item_img_path && 'https://placehold.co/100x100.png'}
					alt=''
				/>
				<p className='mx-1 font-semibold text-sm'>{food_item_name}</p>
				<div className='flex justify-between items-center'>
					<p className='mx-1 font-bold text-md'>₽ {food_item_price}</p>
					<div className='bg-[#df0000] rounded-xl h-8 p-1'>
						<img className='invert-100 ' src='assets/icons/plus.svg' alt='' />
					</div>
				</div>
			</div>
		</>
	)
}
export default MenuCard

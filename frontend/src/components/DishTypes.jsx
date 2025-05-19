const DishTypes = ({ DishTypes_name, DishTypes_img_path }) => {
	return (
		<>
			<div className='bg-[#fefefe] rounded-4xl flex h-10 justify-center items-center pr-3'>
				<img
					className={`rounded-2xl h-full ${
						DishTypes_img_path !== 'assets/images/ролл.png' ? 'p-2' : ''
					}`}
					src={DishTypes_img_path}
					alt=''
				/>
				<p className='font-semibold text-sm'>{DishTypes_name}</p>
			</div>
		</>
	)
}
export default DishTypes

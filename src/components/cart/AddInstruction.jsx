const AddInstruction = () => {
  return (
    <div className="flex flex-col gap-8">
      <label htmlFor="addInstruction" className="cart-sub-title">Add Instruction</label>
      <textarea name="add-instruction" id="addInstruction" className="border border-[border-[#B9BCCF4D] rounded-md focus:outline-none focus:ring-1 px-4 py-6 font-[var(--black)]" placeholder="Write Message here ..."></textarea>
    </div>
  );
};

export default AddInstruction;

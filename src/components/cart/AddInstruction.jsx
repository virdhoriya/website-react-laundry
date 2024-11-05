import PropTypes from "prop-types";

const AddInstruction = ({ instruction, setInstruction }) => {
  return (
    <div className="flex flex-col gap-8">
      <label htmlFor="addInstruction" className="cart-sub-title">
        Add Instruction
      </label>
      <textarea
        name="add-instruction"
        id="addInstruction"
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
        className="border border-[border-[#B9BCCF4D] rounded-md focus:outline-none focus:ring-1 px-4 py-6 font-[var(--black)]"
        placeholder="Write Message here ..."
      ></textarea>
    </div>
  );
};

AddInstruction.propTypes = {
  instruction: PropTypes.string,
  setInstruction: PropTypes.func.isRequired,
};

export default AddInstruction;

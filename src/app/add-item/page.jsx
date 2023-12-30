import DropdownSelect from "../components/DropdownSelect";

export const metadata = {
  title: "Add Food Item",
  description: "Generated by create next app",
};

const AddDoc = () => {

  const typeOptions = ["Veg", "Non-Veg"];


  return <div>
    <form action="" className=" bg-slate-50 hover:shadow-xl shadow-success transition-shadow duration-200 px-2">
      <div className="grid grid-cols-2 gap-2">

        <section>
          <p className="text-lg mb-1">Name</p>

          <input type="text" className="transition-all duration-75 input focus:border-none input-success w-full " placeholder="e.g. Fried Momos" />
        </section>


        <section>
          <p className="text-lg mb-1">Type</p>


          <select defaultValue={`default`} className="select select-success  min-w-full max-w-xs focus:border-none transition-all duration-75">
            <option disabled value={`default`} className="">Select </option>
            <option>{typeOptions[0]}</option>
            <option>{typeOptions[1]}</option>
          </select>
        </section>

      </div> {/*grid finish*/}

      <section>
        <p className="text-lg mb-1">Category</p>

        <input type="text" className="transition-all duration-75 input focus:border-none input-success w-full " placeholder="e.g. BIRYANI" />
      </section>

      {/* <section className="mb-1">
          <p className="text-lg mb-1">Size</p>


          <input type="text" className="transition-all duration-75 input focus:border-none input-success w-full " placeholder="e.g. MEDIUM" />
        </section> */}




      <section className="text-center mb-1">
        <p className="text-lg mb-1">About</p>

        <textarea className="textarea textarea-success min-w-full transition-all duration-75 input focus:border-none min-h-[120px]" placeholder="About"></textarea>
      </section>


      <section className="mb-1">

        <p className="text-lg mb-1">Choose Image</p>

        <input type="file" className="file-input file-input-bordered file-input-success min-w-full max-w-xs " />
      </section>

      <section className="mb-1">

        <p className="text-lg mb-1">Price</p>

        <input type="text" className="transition-all duration-75 input focus:border-none input-success w-full " placeholder="e.g. ₹249" />

      </section>

    </form>

  </div>;
};

export default AddDoc;

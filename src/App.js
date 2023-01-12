import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const {sno,setsno} = useState('S.No');
  const {item,setitem} = useState('Item');
  const {Itemname,setitemname} = useState('Item Name');
  const {uom,setuom} = useState('UOM');
  const {hsncode,sethsncode} = useState('HSN CODE');
  const {quantity,setquantity} = useState('Quantity');
  const {rate,setrate} = useState('Rate');
  const {grossvalue,setgrossvalue} = useState('Gross Value');
  const {cgst,setcgst} = useState('CGST(%)');
  const {cgst1,setcgst1} = useState('CGST');
  const {sgst,setsgst} = useState('SGST(%)');
  const {sgst1,setsgst1} = useState('IGST(%)');
  const {igst,setigst} = useState('IGST');
  const {netvalu,setnetvalu} = useState('NetValue');
  const {remarks,setremarks} = useState('Remarks');

return (
    <div className="App p-5">
    <h2>Purchase Order form</h2>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">S.No</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="S.NO"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Item</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Item"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Item Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Item Name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">UOM</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="UOM"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">HSN CODE</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="HSN CODE"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Quantity</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Quantity"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Rate</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Rate"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Gross Value</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Gross Value"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">CGST(%)</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="CGST(%)"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">CGST</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="CGST"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">SGST(%)</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="SGST(%)"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">IGST(%)</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="IGST(%)"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">IGST</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="IGST"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">NetValue</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="NetValue"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Remarks</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Remarks"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default App;

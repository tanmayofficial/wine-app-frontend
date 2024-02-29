import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from "./components/Home/Home";

import CustomerRegister from './components/Navbar/MasterFile/CustomerRegister/CustomerRegister';
import SuppliersRegister from './components/Navbar/MasterFile/SuppliersRegister/SuppliersRegister';
import ItemCatRegister from './components/Navbar/MasterFile/ItemCatRegister/ItemCatRegister';
import DealerCatDiscRegister from './components/Navbar/MasterFile/DealerCatDiscRegister/DealerCatDiscRegister';
import ItemDiscountRegister from './components/Navbar/MasterFile/ItemDiscountRegister/ItemDiscountRegister';
import LedgerCreation from './components/Navbar/MasterFile/LedgerCreation/LedgerCreation';
import LicenseeInfo from './components/Navbar/MasterFile/LicenseeInfo/LicenseeInfo';
import LPLSetup from './components/Navbar/MasterFile/LplSetup/LPLSetup';
import MinStockRegister from './components/Navbar/MasterFile/MinStockRegister/MinStockRegister';
import SchemeRegister from './components/Navbar/MasterFile/SchemeRegister/SchemeRegister';
import StockRegister from './components/Sidebar/StockRegister/StockRegister';
import StoreInfo from './components/Navbar/MasterFile/StoreInfo/StoreInfo';

import DataEntry from './components/Navbar/DataEntry/DataEntry';
import SaleReport from './components/Navbar/SaleReport/SaleReport';
import PurchaseReport from './components/Navbar/PurchaseReport/PurchaseReport';
import InventoryReport from './components/Navbar/InventoryReport/InventoryReport';
import ExciseReport from './components/Navbar/ExciseReport/ExciseReport';
import AuditAndAccounts from './components/Navbar/AuditAndAccounts/AuditAndAccounts';
import Utilities from './components/Utilities/Utilities';
import DailyStatus from './components/Sidebar/DailyStatus/DailyStatus';
import PreviousYearDSR from './components/Sidebar/PreviousYearDSR/PreviousYearDSR';
import FLBeerCSLedger from './components/Sidebar/FLBeerCSLedger/FLBeerCSLedger';
import FLBeerCSLedgerSummary from './components/Sidebar/FLBeerCSLedgerSummary/FLBeerCSLedgerSummary';
import CatBrandStock from './components/Sidebar/CategoryBrandStock/CatBrandStock';
import ItemBatchMRPStockReport from './components/Sidebar/ItemBatchMRPStockReport/ItemBatchMRPStockReport';
import CategorySaleStatus from './components/Sidebar/CategorySaleStatus/CategorySaleStatus';
import CategoryDsr from './components/Sidebar/CategoryDsr/CategoryDsr';
import CatBrandSize from './components/Sidebar/CatBrandSize/CatBrandSize';
import DailySaleOrder from './components/Sidebar/DailySaleOrder/DailySaleOrder';
import StockStatus from './components/Sidebar/StockStatus/StockStatus';
import DsrOpst from './components/Sidebar/DsrOpst/DsrOpst';
import DsrBrandStock from './components/Sidebar/DsrBrandStock/DsrBrandStock';
import CatLedgerPack from './components/Sidebar/CatLedgerPack/CatLedgerPack';
import GtinStock from './components/Sidebar/GtinStock/GtinStock';
import "./App.css";
import SaleBill from './components/Navbar/DataEntry/SaleBill/SaleBill';
import PurchaseEntry from './components/Navbar/DataEntry/PurchaseEntry/PurchaseEntry';

function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Routes>
                {/* Navbar items */}
                <Route path="/" element={<Home />} />
                <Route path="/data-entry" element={<DataEntry />} />
                <Route path="/sale-report" element={<SaleReport />} />
                <Route path="/purchase-report" element={<PurchaseReport />} />
                <Route path="/inventory-report" element={<InventoryReport />} />
                <Route path="/excise-report" element={<ExciseReport />} />
                <Route path="/audit-accounts" element={<AuditAndAccounts />} />
                <Route path="/utilities" element={<Utilities />} />

                {/* Master File Submenu items */}
                <Route
                  path="/customer-register"
                  element={<CustomerRegister />}
                />
                <Route
                  path="/suppliers-register"
                  element={<SuppliersRegister />}
                />
                <Route path="/lpl-setup" element={<LPLSetup />} />
                <Route path="/stock-register" element={<StockRegister />} />
                <Route
                  path="/item-category-register"
                  element={<ItemCatRegister />}
                />
                <Route
                  path="/item-discount-register"
                  element={<ItemDiscountRegister />}
                />
                <Route
                  path="/dealer-category-discount-register"
                  element={<DealerCatDiscRegister />}
                />
                <Route
                  path="/minimum-stock-register"
                  element={<MinStockRegister />}
                />
                <Route path="/scheme-register" element={<SchemeRegister />} />
                <Route path="/ledger-creation" element={<LedgerCreation />} />
                <Route path="/store-info" element={<StoreInfo />} />
                <Route path="/licensee-info" element={<LicenseeInfo />} />

                {/* Data Entry Submenu items */}
                <Route path="/sale-bill" element={<SaleBill />}>Sale Bill</Route>
                <Route path="/purchase-entry" element={<PurchaseEntry />}>Purchase Entry</Route>
                {/* <Route path="/stock-transfer" element={}>Stock Transfer</Route>
                <Route path="/party-payment" element={}>Party Payment</Route>
                <Route path="/general-payment" element={}>General Payment</Route>
                <Route path="/customer-receipt" element={}>Customer Receipt</Route>
                <Route path="/general-receipt" element={}>General Receipt</Route>
                <Route path="/cash-deposit" element={}>Cash Deposit to Bank</Route>
                <Route path="/cash-withdrawn" element={}>Cash Withdrawn from Bank</Route>
                <Route path="/journal-entry" element={}>Journal Entry</Route> */}

                {/* Sidebar items */}
                <Route path="/daily-status" element={<DailyStatus />} />
                <Route path="/stock-register" element={<StockRegister />} />
                <Route
                  path="/previous-year-dsr"
                  element={<PreviousYearDSR />}
                />
                <Route path="/fl-beer-cs/ledger" element={<FLBeerCSLedger />} />
                <Route
                  path="/fl-beer-cs/ledger-summary"
                  element={<FLBeerCSLedgerSummary />}
                />
                <Route
                  path="/category/brand-stock"
                  element={<CatBrandStock />}
                />
                <Route
                  path="/item/batch-mrp-stock-report"
                  element={<ItemBatchMRPStockReport />}
                />
                <Route
                  path="/category-sale-status"
                  element={<CategorySaleStatus />}
                />
                <Route path="/category-dsr" element={<CategoryDsr />} />
                <Route path="/cate-brand-size" element={<CatBrandSize />} />
                <Route path="/daily-sale-order" element={<DailySaleOrder />} />
                <Route path="/stock-status" element={<StockStatus />} />
                <Route path="/dsr-opst" element={<DsrOpst />} />
                <Route path="/dsr-brand-stock" element={<DsrBrandStock />} />
                <Route
                  path="/category-ledger-pack"
                  element={<CatLedgerPack />}
                />
                <Route path="/gtin-stock" element={<GtinStock />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

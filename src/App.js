import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";

import CustomerRegister from "./components/Navbar/MasterFile/CustomerRegister/CustomerRegister";
import SuppliersRegister from "./components/Navbar/MasterFile/SuppliersRegister/SuppliersRegister";
import ItemCatRegister from "./components/Navbar/MasterFile/ItemCatRegister/ItemCatRegister";
import DealerCatDiscRegister from "./components/Navbar/MasterFile/DealerCatDiscRegister/DealerCatDiscRegister";
import ItemDiscountRegister from "./components/Navbar/MasterFile/ItemDiscountRegister/ItemDiscountRegister";
import LedgerCreation from "./components/Navbar/MasterFile/LedgerCreation/LedgerCreation";
import LicenseeInfo from "./components/Navbar/MasterFile/LicenseeInfo/LicenseeInfo";
import LPLSetup from "./components/Navbar/MasterFile/LplSetup/LPLSetup";
import MinStockRegister from "./components/Navbar/MasterFile/MinStockRegister/MinStockRegister";
import SchemeRegister from "./components/Navbar/MasterFile/SchemeRegister/SchemeRegister";
import StockRegister from "./components/Sidebar/StockRegister/StockRegister";
import StoreInfo from "./components/Navbar/MasterFile/StoreInfo/StoreInfo";
import InventoryReport from "./components/Navbar/InventoryReport/InventoryReport";
import ExciseReport from "./components/Navbar/ExciseReport/ExciseReport";
import AuditAndAccounts from "./components/Navbar/AuditAndAccounts/AuditAndAccounts";
import Utilities from "./components/Utilities/Utilities";
import DailyStatus from "./components/Sidebar/DailyStatus/DailyStatus";
import PreviousYearDSR from "./components/Sidebar/PreviousYearDSR/PreviousYearDSR";
import FLBeerCSLedger from "./components/Sidebar/FLBeerCSLedger/FLBeerCSLedger";
import FLBeerCSLedgerSummary from "./components/Sidebar/FLBeerCSLedgerSummary/FLBeerCSLedgerSummary";
import CatBrandStock from "./components/Sidebar/CategoryBrandStock/CatBrandStock";
import ItemBatchMRPStockReport from "./components/Sidebar/ItemBatchMRPStockReport/ItemBatchMRPStockReport";
import CategorySaleStatus from "./components/Sidebar/CategorySaleStatus/CategorySaleStatus";
import CategoryDsr from "./components/Sidebar/CategoryDsr/CategoryDsr";
import CatBrandSize from "./components/Sidebar/CatBrandSize/CatBrandSize";
import DailySaleOrder from "./components/Sidebar/DailySaleOrder/DailySaleOrder";
import StockStatus from "./components/Sidebar/StockStatus/StockStatus";
import DsrOpst from "./components/Sidebar/DsrOpst/DsrOpst";
import DsrBrandStock from "./components/Sidebar/DsrBrandStock/DsrBrandStock";
import CatLedgerPack from "./components/Sidebar/CatLedgerPack/CatLedgerPack";
import GtinStock from "./components/Sidebar/GtinStock/GtinStock";
import SaleBill from "./components/Navbar/DataEntry/SaleBill/SaleBill";
import PurchaseEntry from "./components/Navbar/DataEntry/PurchaseEntry/PurchaseEntry";
import StockTransfer from "./components/Navbar/DataEntry/StockTransfer/StockTransfer";
import PartyPayment from "./components/Navbar/DataEntry/PartyPayment/PartyPayment";
import GeneralPayment from "./components/Navbar/DataEntry/GeneralPayment/GeneralPayment";
import CustomerReceipt from "./components/Navbar/DataEntry/CustomerReceipt/CustomerReceipt";
import GeneralReceipt from "./components/Navbar/DataEntry/GeneralReceipt/GeneralReceipt";
import CashDeposit from "./components/Navbar/DataEntry/CashDeposit/CashDeposit";
import CashWithdrawn from "./components/Navbar/DataEntry/CashWithdrawn/CashWithdrawn";
import JournalEntry from "./components/Navbar/DataEntry/JournalEntry/JournalEntry";
import SaleReportSummary from "./components/Navbar/SaleReport/SaleReportSummary";
import ItemWiseSaleReport from "./components/Navbar/SaleReport/ItemWiseSaleReport";
import DailySaleReport from "./components/Navbar/SaleReport/DailySaleReport";
import DailyProfitReport from "./components/Navbar/SaleReport/DailyProfitReport";
import DailyItemSaleCategory from "./components/Navbar/SaleReport/DailyItemSaleCategory";
import DailyItemSaleBrand from "./components/Navbar/SaleReport/DailyItemSaleBrand";
import DailyItemStatus from "./components/Navbar/SaleReport/DailyItemStatus";
import CustomerDueReport from "./components/Navbar/SaleReport/CustomerDueReport";
import SalesmanReport from "./components/Navbar/SaleReport/SalesmanReport";
import ReceiptReport from "./components/Navbar/SaleReport/ReceiptReport";
import BillWiseCollectionReport from "./components/Navbar/SaleReport/BillWiseCollectionReport";
import DealerSaleDiscountChart from "./components/Navbar/SaleReport/DealerSaleDiscountChart";
import CustomerTransactionDetails from "./components/Navbar/SaleReport/CustomerTransactionDetails";
import ProfitOnSale from "./components/Navbar/SaleReport/ProfitOnSale";
import BrandSaleStatusReport from "./components/Navbar/SaleReport/SaleStatusReport/BrandSaleStatusReport";
import ItemCateSaleStatusReport from "./components/Navbar/SaleReport/SaleStatusReport/ItemCateSaleStatusReport";
import BrandSaleStatus from "./components/Navbar/SaleReport/SaleStatusReport/BrandSaleStatus";
import CateSaleStatus from "./components/Navbar/SaleReport/SaleStatusReport/CateSaleStatus";
import PurchaseReportSummary from "./components/Navbar/PurchaseReport/PurchaseReportSummary";
import ItemWisePurchaseReport from "./components/Navbar/PurchaseReport/ItemWisePurchaseReport";
import DailyPurchaseReport from "./components/Navbar/PurchaseReport/DailyPurchaseReport";
import SuppliersBalanceReport from "./components/Navbar/PurchaseReport/SuppliersBalanceReport";
import PaymentReport from "./components/Navbar/PurchaseReport/PaymentReport";
import BillWisePaymentReport from "./components/Navbar/PurchaseReport/BillWisePaymentReport";
import "./App.css";

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
                <Route path="/sale-bill" element={<SaleBill />} />
                <Route path="/purchase-entry" element={<PurchaseEntry />} />
                <Route path="/stock-transfer" element={<StockTransfer />} />
                <Route path="/party-payment" element={<PartyPayment />} />
                <Route path="/general-payment" element={<GeneralPayment />} />
                <Route path="/customer-receipt" element={<CustomerReceipt />} />
                <Route path="/general-receipt" element={<GeneralReceipt />} />
                <Route path="/cash-deposit" element={<CashDeposit />} />
                <Route path="/cash-withdrawn" element={<CashWithdrawn />} />
                <Route path="/journal-entry" element={<JournalEntry />} />

                {/* Sale Report Submenu items */}
                <Route
                  path="/sale-report-summary"
                  element={<SaleReportSummary />}
                />
                <Route
                  path="/item-wise-sale-report"
                  element={<ItemWiseSaleReport />}
                />
                <Route
                  path="/daily-sale-report"
                  element={<DailySaleReport />}
                />
                <Route
                  path="/daily-profit-report"
                  element={<DailyProfitReport />}
                />

                {/* Sale Status Report Submenu items */}
                <Route
                  path="/brand-wise-sale-status"
                  element={<BrandSaleStatusReport />}
                />
                <Route
                  path="/item-category-wise-sale-status"
                  element={<ItemCateSaleStatusReport />}
                />
                <Route
                  path="/brand-sale-status"
                  element={<BrandSaleStatus />}
                />
                <Route
                  path="/category-sale-status"
                  element={<CateSaleStatus />}
                />
                <Route
                  path="/daily-item-sale-category"
                  element={<DailyItemSaleCategory />}
                />
                <Route
                  path="/daily-item-sale-brand"
                  element={<DailyItemSaleBrand />}
                />
                <Route
                  path="/daily-item-status"
                  element={<DailyItemStatus />}
                />
                <Route
                  path="/customer-due-report"
                  element={<CustomerDueReport />}
                />
                <Route path="/salesman-report" element={<SalesmanReport />} />
                <Route path="/receipt-report" element={<ReceiptReport />} />
                <Route
                  path="/bill-wise-collection-report"
                  element={<BillWiseCollectionReport />}
                />
                <Route
                  path="/dealer-sale-discount-chart"
                  element={<DealerSaleDiscountChart />}
                />
                <Route
                  path="/customer-transaction-details"
                  element={<CustomerTransactionDetails />}
                />
                <Route path="/profit-on-sale" element={<ProfitOnSale />} />


                {/* Purchase Report Submenu items */}
                <Route
                  path="/purchase-report-summary"
                  element={<PurchaseReportSummary />}
                />
                <Route
                  path="/item-wise-purchase-report"
                  element={<ItemWisePurchaseReport />}
                />
                <Route
                  path="/daily-purchase-report"
                  element={<DailyPurchaseReport />}
                />
                <Route
                  path="/suppliers-balance-report"
                  element={<SuppliersBalanceReport />}
                />
                <Route
                  path="/payment-report"
                  element={<PaymentReport />}
                />
                <Route
                  path="/bill-wise-payment-report"
                  element={<BillWisePaymentReport />}
                />

                {/* Sidebar items */}
                <Route path="/daily-status" element={<DailyStatus />} />
                <Route path="/stock-register" element={<StockRegister />} />
                <Route
                  path="/previous-year-dsr"
                  element={<PreviousYearDSR />}
                />
                <Route
                  path="/fl-beer-cs/ledger-summary"
                  element={<FLBeerCSLedgerSummary />}
                />
                <Route path="/fl-beer-cs/ledger" element={<FLBeerCSLedger />} />
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

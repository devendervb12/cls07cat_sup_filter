sap.ui.controller("cat_sup_to_productlist.Products", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf cat_sup_to_productlist.Products
*/
	onInit: function() {

			var url ="proxy/https/services.odata.org/Northwind/Northwind.svc/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(url);
			this.getView().setModel(oModel);
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf cat_sup_to_productlist.Products
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf cat_sup_to_productlist.Products
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf cat_sup_to_productlist.Products
*/
//	onExit: function() {
//
//	}
	onPress : function(){
		// get SupplierID
		var selectedSupplierID = this.getView().byId("idSupplierSelect").getSelectedKey();
		//get CatID
		var selectedCatID = this.getView().byId("idCatSelect").getSelectedKey();
		
		var filters = [];
		
		var filter1 = new sap.ui.model.Filter({ path : 'SupplierID', operator : 'EQ', value1 : selectedSupplierID});
		var filter2 = new sap.ui.model.Filter({ path : 'CategoryID',operator : 'EQ', value1 : selectedCatID});
		filters.push(filter1);
		filters.push(filter2);
		
		this.getView().byId("idTable").getBinding("items").filter(filters);
		
	}

});
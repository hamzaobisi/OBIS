const {onDocumentCreated}=require('firebase-functions/v2/firestore');
const {initializeApp}=require('firebase-admin/app');
const {getMessaging}=require('firebase-admin/messaging');
initializeApp();
exports.newProductNotification=onDocumentCreated('products/{productId}',async event=>{
 const d=event.data?.data()||{}; if(d.active!==true) return null;
 const name=d.name||'بضاعة جديدة';
 return getMessaging().send({topic:'obisi_all',notification:{title:'OBISI | العبيسي',body:`وصلت بضاعة جديدة: ${name}`},data:{productId:event.params.productId}});
});

//var edit= editUsers(UserId)
function editUsers(userId) {
    $("#BankAccountName").val(jsonData[userId]['first_name']);
    $("#CurrencyCode").val(jsonData[userId]['last_name']);
    $("#DepositDate").val(jsonData[userId]['email']);
    $("#PaymentChannel").val(jsonData[userId]['mobnum'])
}
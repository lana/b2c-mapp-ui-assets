import './styles/styles.scss';

const AccountUpgradeIcon = () => import(/* webpackChunkName: "accountUpgradeIconChunk" */ './icons/accountUpgrade.svg'); // NOTE: we have to manually create some icon components since our svg-loader doesn't handle gradients perfectly in every case
const AccountIcon = () => import(/* webpackChunkName: "AccountIconChunk" */ './components/AccountIcon/AccountIcon.vue'); // NOTE: we have to manually create some icon components since our svg-loader doesn't handle gradients perfectly in every case
const AddBeneficiaryIcon = () => import(/* webpackChunkName: "addBeneficiaryIconChunk" */ './icons/addBeneficiary.svg');
const AddBoldIcon = () => import(/* webpackChunkName: "addBoldIconChunk" */ './icons/addBold.svg');
const AddIcon = () => import(/* webpackChunkName: "addIconChunk" */ './icons/add.svg');
const AddLineIcon = () => import(/* webpackChunkName: "addLineIconChunk" */ './icons/addLine.svg');
const AddUserIcon = () => import(/* webpackChunkName: "addUserIconChunk" */ './icons/addUser.svg');
const AnimatedSleepingSheep = () => import(/* webpackChunkName: "AnimatedSleepingSheepIconChunk" */ './components/AnimatedSleepingSheep/AnimatedSleepingSheep.vue');
const ArrowBackIcon = () => import(/* webpackChunkName: "arrowBackIconChunk" */ './icons/arrowBack.svg');
const ArrowDownBoldIcon = () => import(/* webpackChunkName: "arrowDownBoldIconChunk" */ './icons/arrowDownBold.svg');
const ArrowDownLineIcon = () => import(/* webpackChunkName: "arrowDownLineIconChunk" */ './icons/arrowDownLine.svg');
const ArrowUpBoldIcon = () => import(/* webpackChunkName: "arrowUpBoldIconChunk" */ './icons/arrowUpBold.svg');
const ArrowUpLineIcon = () => import(/* webpackChunkName: "arrowUpLineIconChunk" */ './icons/arrowUpLine.svg');
const AtmIcon = () => import(/* webpackChunkName: "atmIconChunk" */ './icons/atm.svg');
const AttachmentIcon = () => import(/* webpackChunkName: "attachmentIconChunk" */ './icons/attachment.svg');
const BackIcon = () => import(/* webpackChunkName: "backIconChunk" */ './icons/back.svg');
const BalanceIcon = () => import(/* webpackChunkName: "balanceIconChunk" */ './icons/balance.svg');
const BankIcon = () => import(/* webpackChunkName: "bankIconChunk" */ './icons/bank.svg');
const BankAccountIcon = () => import(/* webpackChunkName: "bankAccountIconChunk" */ './icons/bankAccount.svg');
const BarcodeIcon = () => import(/* webpackChunkName: "barcodeIconChunk" */ './icons/barcode.svg');
const BeachIcon = () => import(/* webpackChunkName: "beachIconChunk" */ './icons/beach.svg');
const BeatsIcon = () => import(/* webpackChunkName: "beatsIconChunk" */ './icons/beats.svg');
const BikeIcon = () => import(/* webpackChunkName: "bikeIconChunk" */ './icons/bike.svg');
const BillIcon = () => import(/* webpackChunkName: "billIconChunk" */ './icons/bill.svg');
const BlankCardImage = () => import(/* webpackChunkName: "blankCardIconChunk" */ './icons/blankCard.svg');
const BlueGemIcon = () => import(/* webpackChunkName: "blueGemIconChunk" */ './icons/blueGem.svg');
const BoltIcon = () => import(/* webpackChunkName: "boltIconChunk" */ './icons/bolt.svg');
const BoxIcon = () => import(/* webpackChunkName: "boxIconChunk" */ './icons/box.svg');
const BuildingIcon = () => import(/* webpackChunkName: "buildingIconChunk" */ './icons/building.svg');
const CabifyIcon = () => import(/* webpackChunkName: "cabifyIconChunk" */ './icons/cabify.svg');
const CalculatorCashIcon = () => import(/* webpackChunkName: "calculatorCashIconChunk" */ './icons/calculatorCash.svg');
const CalculatorColorIcon = () => import(/* webpackChunkName: "calculatorColorIconChunk" */ './icons/calculatorColor.svg');
const CalculatorIcon = () => import(/* webpackChunkName: "calculatorIconChunk" */ './icons/calculator.svg');
const CalendarIcon = () => import(/* webpackChunkName: "calendarIconChunk" */ './icons/calendar.svg');
const CalendarCabifyIcon = () => import(/* webpackChunkName: "calendarCabifyIconChunk" */ './icons/calendarCabify.svg');
const CalendarCoinsIcon = () => import(/* webpackChunkName: "calendarCoinsIconChunk" */ './icons/calendarCoins.svg');
const CalendarColorIcon = () => import(/* webpackChunkName: "calendarColorIconChunk" */ './icons/calendarColor.svg');
const CalendarErrorIcon = () => import(/* webpackChunkName: "calendarErrorIconChunk" */ './icons/calendarError.svg');
const CameraIcon = () => import(/* webpackChunkName: "cameraIconChunk" */ './icons/camera.svg');
const CameraImage = () => import(/* webpackChunkName: "cameraImageIconChunk" */ './icons/cameraImage.svg');
const CameraMicroillustration = () => import(/* webpackChunkName: "cameraMicroillustrationIconChunk" */ './icons/cameraMicroillustration.svg');
const CardBlockIcon = () => import(/* webpackChunkName: "cardBlockIconChunk" */ './icons/cardBlock.svg');
const CardBlockedImage = () => import(/* webpackChunkName: "cardBlockedImageIconChunk" */ './icons/cardBlockedImage.svg');
const CardBrokenIcon = () => import(/* webpackChunkName: "cardBrokenIconChunk" */ './icons/cardBroken.svg');
const CardBrokenImage = () => import(/* webpackChunkName: "cardBrokenImageIconChunk" */ './icons/cardBrokenImage.svg');
const CardCheckIcon = () => import(/* webpackChunkName: "cardCheckIconChunk" */ './icons/cardCheck.svg');
const CardDeleteIcon = () => import(/* webpackChunkName: "cardCheckIconChunk" */ './icons/cardDelete.svg');
const CardIcon = () => import(/* webpackChunkName: "cardIconChunk" */ './icons/card.svg');
const CardImage = () => import(/* webpackChunkName: "cardImageIconChunk" */ './icons/cardImage.svg');
const CardLockIcon = () => import(/* webpackChunkName: "cardLockIconChunk" */ './icons/cardLock.svg');
const CardMinimalIcon = () => import(/* webpackChunkName: "cardMinimalIconChunk" */ './icons/cardMinimal.svg');
const CardMobileIcon = () => import(/* webpackChunkName: "cardMobileIconChunk" */ './icons/cardMobile.svg');
const CardNullIcon = () => import(/* webpackChunkName: "cardNullIconChunk" */ './icons/cardNull.svg');
const CardPinIcon = () => import(/* webpackChunkName: "cardPinIconChunk" */ './icons/cardPin.svg');
const CardRenewalIcon = () => import(/* webpackChunkName: "cardRenewalIconChunk" */ './icons/cardRenewal.svg');
const CardShieldIcon = () => import(/* webpackChunkName: "cardShieldIconChunk" */ './icons/cardShield.svg');
const CardUnlocked = () => import(/* webpackChunkName: "cardUnlockedIconChunk" */ './icons/cardUnlocked.svg');
const CarBrokenIcon = () => import(/* webpackChunkName: "carBrokenIconChunk" */ './icons/carBroken.svg');
const CarColorIcon = () => import(/* webpackChunkName: "carColorIconChunk" */ './icons/carColor.svg');
const CarDamaged = () => import(/* webpackChunkName: "carDamagedIconChunk" */ './icons/carDamaged.svg');
const CarIcon = () => import(/* webpackChunkName: "carIconChunk" */ './icons/car.svg');
const CarInsuranceIcon = () => import(/* webpackChunkName: "carInsuranceIconChunk" */ './icons/carInsurance.svg');
const CashIcon = () => import(/* webpackChunkName: "cashIconChunk" */ './icons/cash.svg');
const CashPaymentBillIcon = () => import(/* webpackChunkName: "cashPaymentBillIconChunk" */ './icons/cashPaymentBill.svg');
const CashPaymentIcon = () => import(/* webpackChunkName: "cashPaymentIconChunk" */ './icons/cashPayment.svg');
const ChatIcon = () => import(/* webpackChunkName: "chatIconChunk" */ './icons/chat.svg');
const CheckboxCheckedIcon = () => import(/* webpackChunkName: "checkboxCheckedIconChunk" */ './icons/checkboxChecked.svg');
const CheckboxUncheckedIcon = () => import(/* webpackChunkName: "checkboxUncheckedIconChunk" */ './icons/checkboxUnchecked.svg');
const CheckBoldIcon = () => import(/* webpackChunkName: "checkBoldIconChunk" */ './icons/checkBold.svg');
const CheckCircleIcon = () => import(/* webpackChunkName: "checkCircleIconChunk" */ './icons/checkCircle.svg');
const CheckColorIcon = () => import(/* webpackChunkName: "checkColorIconChunk" */ './icons/checkColor.svg');
const CheckIcon = () => import(/* webpackChunkName: "checkIconChunk" */ './icons/check.svg');
const CheckLineIcon = () => import(/* webpackChunkName: "checkLineIconChunk" */ './icons/checkLine.svg');
const ChevronDownIcon = () => import(/* webpackChunkName: "chevronDownIconChunk" */ './icons/chevronDown.svg');
const ChevronLeftIcon = () => import(/* webpackChunkName: "chevronLeftIconChunk" */ './icons/chevronLeft.svg');
const ChevronsRightIcon = () => import(/* webpackChunkName: "chevronsRightIconChunk" */ './icons/chevronsRight.svg');
const ChevronRightIcon = () => import(/* webpackChunkName: "chevronRightIconChunk" */ './icons/chevronRight.svg');
const ChevronUpIcon = () => import(/* webpackChunkName: "chevronUpIconChunk" */ './icons/chevronUp.svg');
const CircleIcon = () => import(/* webpackChunkName: "circleIconChunk" */ './icons/circle.svg');
const ClearNotificationsIcon = () => import(/* webpackChunkName: "clearNotificationsIconChunk" */ './icons/clearNotifications.svg');
const ClockColorIcon = () => import(/* webpackChunkName: "clockColorIconChunk" */ './icons/clockColor.svg');
const ClockIcon = () => import(/* webpackChunkName: "clockIconChunk" */ './icons/clock.svg');
const CloseBoldIcon = () => import(/* webpackChunkName: "closeBoldIconChunk" */ './icons/closeBold.svg');
const CloseIcon = () => import(/* webpackChunkName: "closeIconChunk" */ './icons/close.svg');
const CloseLineIcon = () => import(/* webpackChunkName: "closeLineIconChunk" */ './icons/closeLine.svg');
const CoinsColorIcon = () => import(/* webpackChunkName: "coinsColorIconChunk" */ './icons/coinsColorIcon.svg');
const CoinIcon = () => import(/* webpackChunkName: "CoinIconChunk" */ './components/CoinIcon/CoinIcon.vue');
const CoinsIcon = () => import(/* webpackChunkName: "coinsIconChunk" */ './icons/coins.svg');
const ColorLockIcon = () => import(/* webpackChunkName: "ColorLockIconChunk" */ './components/ColorLockIcon/ColorLockIcon.vue');
const ColorSecurityIcon = () => import(/* webpackChunkName: "ColorSecurityIconChunk" */ './components/ColorSecurityIcon/ColorSecurityIcon.vue');
const ColorSmartphoneIcon = () => import(/* webpackChunkName: "ColorSmartphoneIconChunk" */ './components/ColorSmartphoneIcon/ColorSmartphoneIcon.vue');
const ColorUmbrellaIcon = () => import(/* webpackChunkName: "ColorUmbrellaIconChunk" */ './components/ColorUmbrellaIcon/ColorUmbrellaIcon.vue');
const CollapseSmallIcon = () => import(/* webpackChunkName: "collapseSmallIconChunk" */ './icons/collapseSmall.svg');
const CollectIcon = () => import(/* webpackChunkName: "collectIconChunk" */ './icons/collect.svg');
const CommissionsIcon = () => import(/* webpackChunkName: "commissionsIconChunk" */ './icons/commissions.svg');
const ConnectCabifyImage = () => import(/* webpackChunkName: "connectCabifyIconChunk" */ './icons/connectCabify.svg');
const ContractIcon = () => import(/* webpackChunkName: "contractIconChunk" */ './icons/contract.svg');
const CopyIcon = () => import(/* webpackChunkName: "copyIconChunk" */ './icons/copy.svg');
const CurrencyDecreaseIcon = () => import(/* webpackChunkName: "currencyDecreaseIconChunk" */ './icons/currencyDecrease.svg');
const CurrencyIncreaseIcon = () => import(/* webpackChunkName: "currencyIncreaseIconChunk" */ './icons/currencyIncrease.svg');
const DeleteIcon = () => import(/* webpackChunkName: "deleteIconChunk" */ './icons/delete.svg');
const DeleteMinimalIcon = () => import(/* webpackChunkName: "deleteMinimalIconChunk" */ './icons/deleteMinimal.svg');
const DeleteKeyIcon = () => import(/* webpackChunkName: "deleteKeyIconChunk" */ './icons/deleteKey.svg');
const DepositCloseIcon = () => import(/* webpackChunkName: "depositCloseIconChunk" */ './icons/depositClose.svg');
const DepositOpenIcon = () => import(/* webpackChunkName: "depositOpenIconChunk" */ './icons/depositOpen.svg');
const DepositIcon = () => import(/* webpackChunkName: "depositIconChunk" */ './icons/deposit.svg');
const DescriptionAddedIcon = () => import(/* webpackChunkName: "descriptionAddedIconChunk" */ './icons/descriptionAdded.svg');
const DescriptionIcon = () => import(/* webpackChunkName: "documentIconChunk" */ './icons/document.svg');
const DetailsIcon = () => import(/* webpackChunkName: "DetailsIconChunk" */ './components/DetailsIcon/DetailsIcon.vue');
const DeviceInsuranceIcon = () => import(/* webpackChunkName: "deviceInsuranceIconChunk" */ './icons/deviceInsurance.svg');
const DidiIcon = () => import(/* webpackChunkName: "didiIconChunk" */ './icons/didi.svg');
const DisabilityIcon = () => import(/* webpackChunkName: "disabilityIconChunk" */ './icons/disability.svg');
const DiscountIcon = () => import(/* webpackChunkName: "discountIconChunk" */ './icons/discount.svg');
const DocumentAddedIcon = () => import(/* webpackChunkName: "documentAddedIconChunk" */ './icons/documentAdded.svg');
const DocumentEditIcon = () => import(/* webpackChunkName: "documentEditIconChunk" */ './icons/documentEdit.svg');
const DocumentFilledIcon = () => import(/* webpackChunkName: "documentFilledIconChunk" */ './icons/documentFilled.svg');
const DocumentMedicIcon = () => import(/* webpackChunkName: "documentMedicIconChunk" */ './icons/documentMedic.svg');
const DocumentNullIcon = () => import(/* webpackChunkName: "documentNullIconChunk" */ './icons/documentNull.svg');
const DocumentOkIcon = () => import(/* webpackChunkName: "documentOkIconChunk" */ './icons/documentOk.svg');
const DollarBoldIcon = () => import(/* webpackChunkName: "dollarBoldIconChunk" */ './icons/dollarBold.svg');
const DollarLineIcon = () => import(/* webpackChunkName: "dollarLineIconChunk" */ './icons/dollarLine.svg');
const DownIcon = () => import(/* webpackChunkName: "downIconChunk" */ './icons/down.svg');
const DrivingLicenseIcon = () => import(/* webpackChunkName: "drivingLicenseIconChunk" */ './icons/drivingLicense.svg');
const EarnCoins = () => import(/* webpackChunkName: "earnCoinsIconChunk" */ './icons/earnCoins.svg');
const EditIcon = () => import(/* webpackChunkName: "editIconChunk" */ './icons/edit.svg');
const EditMinimalIcon = () => import(/* webpackChunkName: "editMinimalIconChunk" */ './icons/editMinimal.svg');
const EntertainmentIcon = () => import(/* webpackChunkName: "entertainmentIconChunk" */ './icons/entertainment.svg');
const EraseIcon = () => import(/* webpackChunkName: "eraseIconChunk" */ './icons/erase.svg');
const ErrorConnection = () => import(/* webpackChunkName: "errorConnectionIconChunk" */ './icons/errorConnection.svg');
const ErrorMicroillustration = () => import(/* webpackChunkName: "errorMicroillustrationIconChunk" */ './icons/errorMicroillustration.svg');
const EuroBoldIcon = () => import(/* webpackChunkName: "euroBoldIconChunk" */ './icons/euroBold.svg');
const EuroLineIcon = () => import(/* webpackChunkName: "euroLineIconChunk" */ './icons/euroLine.svg');
const ExpandSmallIcon = () => import(/* webpackChunkName: "expandSmallIconChunk" */ './icons/expandSmall.svg');
const FacebookDarkIcon = () => import(/* webpackChunkName: "facebookDarkBlueIconChunk" */ './icons/facebookDarkBlue.svg');
const FacebookIcon = () => import(/* webpackChunkName: "facebookIconChunk" */ './icons/facebook.svg');
const FaceIdBlueIcon = () => import(/* webpackChunkName: "faceIdBlueIconChunk" */ './icons/faceIdBlue.svg');
const FaceIdIcon = () => import(/* webpackChunkName: "faceIdIconChunk" */ './icons/faceId.svg');
const FaceScanIcon = () => import(/* webpackChunkName: "faceScanIconChunk" */ './icons/faceScan.svg');
const FaqIcon = () => import(/* webpackChunkName: "faqIconChunk" */ './icons/faq.svg');
const FavoriteOffIcon = () => import(/* webpackChunkName: "favoriteOffIconChunk" */ './icons/favoriteOff.svg');
const FavoriteOnIcon = () => import(/* webpackChunkName: "favoriteOnIconChunk" */ './icons/favoriteOn.svg');
const FilterIcon = () => import(/* webpackChunkName: "filterIconChunk" */ './icons/filter.svg');
const FillInfoIcon = () => import(/* webpackChunkName: "fillInfoIconChunk" */ './icons/fillInfo.svg');
const FinanceIcon = () => import(/* webpackChunkName: "financeIconChunk" */ './icons/finance.svg');
const FlashOffIcon = () => import(/* webpackChunkName: "flashOffIconChunk" */ './icons/flashOff.svg');
const FlashOnIcon = () => import(/* webpackChunkName: "flashOnIconChunk" */ './icons/flashOn.svg');
const ForwardIcon = () => import(/* webpackChunkName: "forwardIconChunk" */ './icons/forward.svg');
const ForwardSmallIcon = () => import(/* webpackChunkName: "forwardSmallIconChunk" */ './icons/forwardSmall.svg');
const FuelColorIcon = () => import(/* webpackChunkName: "fuelColorIconChunk" */ './icons/fuelColor.svg');
const FuelIcon = () => import(/* webpackChunkName: "fuelIconChunk" */ './icons/fuel.svg');
const GamePadIcon = () => import(/* webpackChunkName: "gamepadIconChunk" */ './icons/gamepad.svg');
const GasIcon = () => import(/* webpackChunkName: "gasIconChunk" */ './icons/gas.svg');
const GemIcon = () => import(/* webpackChunkName: "gemIconChunk" */ './icons/gem.svg');
const GovernmentIcon = () => import(/* webpackChunkName: "governmentIconChunk" */ './icons/government.svg');
const HealthIcon = () => import(/* webpackChunkName: "healthIconChunk" */ './icons/health.svg');
const HealthAffiliationIcon = () => import(/* webpackChunkName: "healthAffiliationIconChunk" */ './icons/healthAffiliation.svg');
const HealthCardIcon = () => import(/* webpackChunkName: "healthCardIconChunk" */ './icons/healthCard.svg');
const HealthInsuranceIcon = () => import(/* webpackChunkName: "healthInsuranceIconChunk" */ './icons/healthInsurance.svg');
const HelpBoldIcon = () => import(/* webpackChunkName: "helpBoldIconChunk" */ './icons/helpBold.svg');
const HelpColorIcon = () => import(/* webpackChunkName: "helpColorIconChunk" */ './icons/helpColor.svg');
const HelpIcon = () => import(/* webpackChunkName: "helpIconChunk" */ './icons/help.svg');
const HelpLineIcon = () => import(/* webpackChunkName: "helpLineIconChunk" */ './icons/helpLine.svg');
const HouseIcon = () => import(/* webpackChunkName: "houseIconChunk" */ './icons/house.svg');
const ImageIcon = () => import(/* webpackChunkName: "imageIconChunk" */ './icons/image.svg');
const InfoIcon = () => import(/* webpackChunkName: "infoBoldIconChunk" */ './icons/infoBold.svg');
const InfoMicroillustration = () => import(/* webpackChunkName: "infoMicroillustrationIconChunk" */ './icons/infoMicroillustration.svg');
const InfoLineIcon = () => import(/* webpackChunkName: "infoLineIconChunk" */ './icons/infoLine.svg');
const InstagramDarkIcon = () => import(/* webpackChunkName: "instagramDarkBlueIconChunk" */ './icons/instagramDarkBlue.svg');
const InstagramIcon = () => import(/* webpackChunkName: "instagramIconChunk" */ './icons/instagram.svg');
const InsuranceIcon = () => import(/* webpackChunkName: "insuranceIconChunk" */ './icons/insurance.svg');
const InvestIcon = () => import(/* webpackChunkName: "investIconChunk" */ './icons/invest.svg');
const InvestmentIcon = () => import(/* webpackChunkName: "investmentIconChunk" */ './icons/investment.svg');
const JobIcon = () => import(/* webpackChunkName: "jobIconChunk" */ './icons/job.svg');
const KnowledgeUserInfo = () => import(/* webpackChunkName: "knowledgeUserInfoIconChunk" */ './icons/knowledgeUserInfo.svg');
const LanaAccountIcon = () => import(/* webpackChunkName: "lanaAccountIconChunk" */ './icons/lanaAccount.svg');
const LanaAccountMicroillustration = () => import(/* webpackChunkName: "lanaAccountMicroillustrationIconChunk" */ './icons/lanaAccountMicroillustration.svg');
const LanaAppIcon = () => import(/* webpackChunkName: "LanaAppIconChunk" */ './components/LanaAppIcon/LanaAppIcon.vue');
const LanaCardIcon = () => import(/* webpackChunkName: "lanaCardIconChunk" */ './icons/lanaCard.svg');
const LanaCardAtmIcon = () => import(/* webpackChunkName: "lanaCardAtmIconChunk" */ './icons/lanaCardAtm.svg');
const LanaCardDelayImage = () => import(/* webpackChunkName: "lanaCardDelayImageIconChunk" */ './icons/lanaCardDelayImage.svg');
const LanaCardEmptyIcon = () => import(/* webpackChunkName: "lanaCardEmptyIconChunk" */ './icons/lanaCardEmpty.svg');
const LanaCardNewImage = () => import(/* webpackChunkName: "lanaCardNewImageIconChunk" */ './icons/lanaCardNewImage.svg');
const LanaCardArrivedImage = () => import(/* webpackChunkName: "lanaCardArrivedImageIconChunk" */ './icons/lanaCardArrivedImage.svg');
const LanaCardSendIcon = () => import(/* webpackChunkName: "lanaCardSendIconChunk" */ './icons/lanaCardSend.svg');
const LanaCardSmallIcon = () => import(/* webpackChunkName: "lanaCardSmallIconChunk" */ './icons/lanaCardSmall.svg');
const LanaSimShippedIcon = () => import(/* webpackChunkName: "lanaSimShippedIconChunk" */ './icons/lanaSimShipped.svg');
const LandlinePhoneIcon = () => import(/* webpackChunkName: "landlinePhoneIconChunk" */ './icons/landlinePhone.svg');
const LightIcon = () => import(/* webpackChunkName: "lightIconChunk" */ './icons/light.svg');
const LinkedinDarkIcon = () => import(/* webpackChunkName: "linkedinDarkBlueIconChunk" */ './icons/linkedinDarkBlue.svg');
const LinkedinIcon = () => import(/* webpackChunkName: "linkedInIconChunk" */ './icons/linkedIn.svg');
const ListIcon = () => import(/* webpackChunkName: "listIconChunk" */ './icons/list.svg');
const LocationColorIcon = () => import(/* webpackChunkName: "locationColorIconChunk" */ './icons/locationColor.svg');
const LocationHomeIcon = () => import(/* webpackChunkName: "locationHomeIconChunk" */ './icons/locationHome.svg');
const LocationIcon = () => import(/* webpackChunkName: "locationIconChunk" */ './icons/location.svg');
const LocationTargetIcon = () => import(/* webpackChunkName: "locationTargetIconChunk" */ './icons/locationTarget.svg');
const LockCircleIcon = () => import(/* webpackChunkName: "lockCircleIconChunk" */ './icons/lockCircle.svg');
const LockIcon = () => import(/* webpackChunkName: "lockIconChunk" */ './icons/lock.svg');
const Logo = () => import(/* webpackChunkName: "logoIconChunk" */ './icons/logo.svg');
const LogoImage = () => import(/* webpackChunkName: "logoImageIconChunk" */ './icons/logoImage.svg');
const LogOutIcon = () => import(/* webpackChunkName: "logoutIconChunk" */ './icons/logout.svg');
const MailColorIcon = () => import(/* webpackChunkName: "mailColorIconChunk" */ './icons/mailColor.svg');
const MailIcon = () => import(/* webpackChunkName: "mailIconChunk" */ './icons/mail.svg');
const MailIllustration = () => import(/* webpackChunkName: "mailIllustrationIconChunk" */ './icons/mailIllustration.svg');
const MapImage = () => import(/* webpackChunkName: "mapIconChunk" */ './icons/map.svg');
const MedalIcon = () => import(/* webpackChunkName: "medalIconChunk" */ './icons/medal.svg');
const MedicBoxIcon = () => import(/* webpackChunkName: "medicBoxIconChunk" */ './icons/medicBox.svg');
const MenuIcon = () => import(/* webpackChunkName: "menuIconChunk" */ './icons/menu.svg');
const MessageBoldIcon = () => import(/* webpackChunkName: "messageBoldIconChunk" */ './icons/messageBold.svg');
const MessageIcon = () => import(/* webpackChunkName: "messageIconChunk" */ './icons/message.svg');
const MessageLineIcon = () => import(/* webpackChunkName: "messageLineIconChunk" */ './icons/messageLine.svg');
const MicroappIcon = () => import(/* webpackChunkName: "microappIconChunk" */ './icons/microapp.svg');
const MicroappMicroillustration = () => import(/* webpackChunkName: "microappMicroillustrationIconChunk" */ './icons/microappMicroillustration.svg');
const MoneyBagIcon = () => import(/* webpackChunkName: "moneyBagIconChunk" */ './icons/moneyBag.svg');
const MoneyBagColorIcon = () => import(/* webpackChunkName: "moneyBagColorIconChunk" */ './icons/moneyBagColor.svg');
const MobileIcon = () => import(/* webpackChunkName: "mobileIconChunk" */ './icons/mobile.svg');
const MoneyIcon = () => import(/* webpackChunkName: "moneyIconChunk" */ './icons/money.svg');
const MopErrorIcon = () => import(/* webpackChunkName: "mopErrorIconChunk" */ './icons/mopError.svg');
const MopIcon = () => import(/* webpackChunkName: "mopIconChunk" */ './icons/mop.svg');
const MopPendingIcon = () => import(/* webpackChunkName: "mopPendingIconChunk" */ './icons/mopPending.svg');
const MopSpinnerIcon = () => import(/* webpackChunkName: "mopSpinnerIconChunk" */ './icons/mopSpinner.svg');
const MopSuccessIcon = () => import(/* webpackChunkName: "mopSuccessIconChunk" */ './icons/mopSuccess.svg');
const MoreIcon = () => import(/* webpackChunkName: "moreIconChunk" */ './icons/more.svg');
const MoveMoneyIcon = () => import(/* webpackChunkName: "moveMoneyIconChunk" */ './icons/moveMoney.svg');
const NotificationsClearedIcon = () => import(/* webpackChunkName: "notificationsClearedIconChunk" */ './icons/notificationsCleared.svg');
const NotificationsIcon = () => import(/* webpackChunkName: "notificationsIconChunk" */ './icons/notifications.svg');
const PaymentsIcon = () => import(/* webpackChunkName: "PaymentsIconChunk" */ './components/PaymentsIcon/PaymentsIcon.vue');
const PayIcon = () => import(/* webpackChunkName: "payIconChunk" */ './icons/pay.svg');
const PdfIcon = () => import(/* webpackChunkName: "pdfIconChunk" */ './icons/pdf.svg');
const PendingMicroillustration = () => import(/* webpackChunkName: "pendingMicroillustrationIconChunk" */ './icons/pendingMicroillustration.svg');
const PercentageMicroillustration = () => import(/* webpackChunkName: "percentageMicroillustrationIconChunk" */ './icons/percentageMicroillustration.svg');
const PersonIcon = () => import(/* webpackChunkName: "personIconChunk" */ './icons/person.svg');
const PetRunningImage = () => import(/* webpackChunkName: "petRunningIconChunk" */ './icons/petRunning.svg');
const PhoneIcon = () => import(/* webpackChunkName: "phoneIconChunk" */ './icons/phone.svg');
const PhoneCrookedIcon = () => import(/* webpackChunkName: "phoneCrookedIconChunk" */ './icons/phoneCrooked.svg');
const PhoneMoneyIcon = () => import(/* webpackChunkName: "phoneMoneyIconChunk" */ './icons/phoneMoney.svg');
const PhoneWorkInProgressIcon = () => import(/* webpackChunkName: "phoneWorkInProgressIconChunk" */ './icons/phoneWorkInProgress.svg');
const PigIcon = () => import(/* webpackChunkName: "pigIconChunk" */ './icons/pig.svg');
const PigMoneyIcon = () => import(/* webpackChunkName: "pigMoneyIconChunk" */ './icons/pigMoney.svg');
const PinIcon = () => import(/* webpackChunkName: "pinIconChunk" */ './icons/pin.svg');
const PlugMicroillustration = () => import(/* webpackChunkName: "plugMicroillustrationIconChunk" */ './icons/plugMicroillustration.svg');
const PlusMicroillustration = () => import(/* webpackChunkName: "plusMicroillustrationIconChunk" */ './icons/plusMicroillustration.svg');
const PresentIcon = () => import(/* webpackChunkName: "presentIconChunk" */ './icons/present.svg');
const ProductsIcon = () => import(/* webpackChunkName: "productsIconChunk" */ './icons/products.svg');
const PromptCashLocationImage = () => import(/* webpackChunkName: "promptCashLocationIconChunk" */ './icons/promptCashLocation.svg');
const PromptLocationImage = () => import(/* webpackChunkName: "promptLocationIconChunk" */ './icons/promptLocation.svg');
const PromptLocationWarning = () => import(/* webpackChunkName: "promptLocationWarningIconChunk" */ './icons/promptLocationWarning.svg');
const PromptPermissionsImage = () => import(/* webpackChunkName: "promptPermissionsIconChunk" */ './icons/promptPermissions.svg');
const PromptSelfieImage = () => import(/* webpackChunkName: "promptSelfieIconChunk" */ './icons/promptSelfie.svg');
const QrcardIcon = () => import(/* webpackChunkName: "qrCardIconChunk" */ './icons/qrCard.svg');
const QrCodeIcon = () => import(/* webpackChunkName: "qrCodeIconChunk" */ './icons/qrCode.svg');
const RappiIcon = () => import(/* webpackChunkName: "rappiIconChunk" */ './icons/rappi.svg');
const RecordIcon = () => import(/* webpackChunkName: "recordIconChunk" */ './icons/record.svg');
const ReloadIcon = () => import(/* webpackChunkName: "reloadIconChunk" */ './icons/reload.svg');
const RequestIcon = () => import(/* webpackChunkName: "requestIconChunk" */ './icons/request.svg');
const ResizeIcon = () => import(/* webpackChunkName: "resizeIconChunk" */ './icons/resize.svg');
const RfcIcon = () => import(/* webpackChunkName: "rfcIconChunk" */ './icons/rfc.svg');
const RocketIcon = () => import(/* webpackChunkName: "rocketIconChunk" */ './icons/rocket.svg');
const RotateDeviceIcon = () => import(/* webpackChunkName: "rotateDeviceIconChunk" */ './icons/rotateDevice.svg');
const RotateIcon = () => import(/* webpackChunkName: "rotateIconChunk" */ './icons/rotate.svg');
const RotateLandscapeIcon = () => import(/* webpackChunkName: "rotateLandscapeIconChunk" */ './icons/rotateLandscape.svg');
const RotatePortraitIcon = () => import(/* webpackChunkName: "rotatePortraitIconChunk" */ './icons/rotatePortrait.svg');
const SaveMoneyIcon = () => import(/* webpackChunkName: "saveMoneyIconChunk" */ './icons/saveMoney.svg');
const SavingsIcon = () => import(/* webpackChunkName: "savingsIconChunk" */ './icons/savings.svg');
const ScanIcon = () => import(/* webpackChunkName: "scanIconChunk" */ './icons/scan.svg');
const ScanSuccessImage = () => import(/* webpackChunkName: "scanSuccessIconChunk" */ './icons/scanSuccess.svg');
const ScanFailureImage = () => import(/* webpackChunkName: "scanFailureIconChunk" */ './icons/scanFailure.svg');
const ScooterIcon = () => import(/* webpackChunkName: "scooterIconChunk" */ './icons/scooter.svg');
const SearchIcon = () => import(/* webpackChunkName: "searchIconChunk" */ './icons/search.svg');
const SearchAtmIcon = () => import(/* webpackChunkName: "searchAtmIconChunk" */ './icons/searchAtm.svg');
const SecurityIcon = () => import(/* webpackChunkName: "securityIconChunk" */ './icons/security.svg');
const SelfieIcon = () => import(/* webpackChunkName: "selfieIconChunk" */ './icons/selfie.svg');
const SelfiePictureIcon = () => import(/* webpackChunkName: "selfiePictureIconChunk" */ './icons/selfiePicture.svg');
const SendIcon = () => import(/* webpackChunkName: "sendIconChunk" */ './icons/send.svg');
const ServerIcon = () => import(/* webpackChunkName: "serverIconChunk" */ './icons/server.svg');
const ServicesColorIcon = () => import(/* webpackChunkName: "servicesColorIconChunk" */ './icons/servicesColor.svg');
const ServicesIcon = () => import(/* webpackChunkName: "servicesIconChunk" */ './icons/services.svg');
const SetPinImage = () => import(/* webpackChunkName: "setPinIconChunk" */ './icons/setPin.svg');
const SettingsColorIcon = () => import(/* webpackChunkName: "settingsColorIconChunk" */ './icons/settingsColor.svg');
const SettingsIcon = () => import(/* webpackChunkName: "settingsIconChunk" */ './icons/settings.svg');
const ShareAndroidIcon = () => import(/* webpackChunkName: "shareAndroidIconChunk" */ './icons/shareAndroid.svg');
const ShareIcon = () => import(/* webpackChunkName: "shareIconChunk" */ './icons/share.svg');
const ShareIosIcon = () => import(/* webpackChunkName: "shareIosIconChunk" */ './icons/shareIos.svg');
const SheepIcon = () => import(/* webpackChunkName: "SheepIconChunk" */ './components/SheepIcon/SheepIcon.vue');
const ShieldIcon = () => import(/* webpackChunkName: "shieldIconChunk" */ './icons/shield.svg');
const ShoppingIcon = () => import(/* webpackChunkName: "shoppingIconChunk" */ './icons/shopping.svg');
const ShopMicroillustration = () => import(/* webpackChunkName: "shopMicroillustrationIconChunk" */ './icons/shopMicroillustration.svg');
const ShoppingSmallIcon = () => import(/* webpackChunkName: "shoppingSmallIconChunk" */ './icons/shoppingSmall.svg');
const SignIcon = () => import(/* webpackChunkName: "signIconChunk" */ './icons/sign.svg');
const SimIcon = () => import(/* webpackChunkName: "simIconChunk" */ './icons/sim.svg');
const SleepingSheepIcon = () => import(/* webpackChunkName: "sleepingSheepIconChunk" */ './icons/sleepingSheep.svg');
const SmallCircleIcon = () => import(/* webpackChunkName: "smallCircleIconChunk" */ './icons/smallCircle.svg');
const SmsIcon = () => import(/* webpackChunkName: "smsIconChunk" */ './icons/sms.svg');
const SnowFlakeIcon = () => import(/* webpackChunkName: "snowflakeIconChunk" */ './icons/snowflake.svg');
const SpeakerIcon = () => import(/* webpackChunkName: "speakerIconChunk" */ './icons/speaker.svg');
const StarsIcon = () => import(/* webpackChunkName: "starsIconChunk" */ './icons/stars.svg');
const StarsMicroillustration = () => import(/* webpackChunkName: "starsMicroillustrationIconChunk" */ './icons/starsMicroillustration.svg');
const SuccessImage = () => import(/* webpackChunkName: "successImageIconChunk" */ './icons/successImage.svg');
const SuccessInfoImage = () => import(/* webpackChunkName: "successInfoIconChunk" */ './icons/successInfo.svg');
const SuccessMicroillustration = () => import(/* webpackChunkName: "successMicroillustrationIconChunk" */ './icons/successMicroillustration.svg');
const SuccessPhoneImage = () => import(/* webpackChunkName: "successPhoneIconChunk" */ './icons/successPhone.svg');
const SupportColorIcon = () => import(/* webpackChunkName: "supportColorIconChunk" */ './icons/supportColor.svg');
const SupportChatLineIcon = () => import(/* webpackChunkName: "supportChatLineIconChunk" */ './icons/supportChatLine.svg');
const SupportIcon = () => import(/* webpackChunkName: "supportIconChunk" */ './icons/support.svg');
const TaxesIcon = () => import(/* webpackChunkName: "taxesIconChunk" */ './icons/taxes.svg');
const TCBusinessIcon = () => import(/* webpackChunkName: "tcBusinessIconChunk" */ './icons/tcBusiness.svg');
const TCCashIcon = () => import(/* webpackChunkName: "tcCashIconChunk" */ './icons/tcCash.svg');
const TCGroceriesIcon = () => import(/* webpackChunkName: "tcGroceriesIconChunk" */ './icons/tcGroceries.svg');
const TCHealthIcon = () => import(/* webpackChunkName: "tcHealthIconChunk" */ './icons/tcHealth.svg');
const TCIncomeIcon = () => import(/* webpackChunkName: "tcIncomeIconChunk" */ './icons/tcIncome.svg');
const TCLeisureIcon = () => import(/* webpackChunkName: "tcLeisureIconChunk" */ './icons/tcLeisure.svg');
const TCRestaurantsIcon = () => import(/* webpackChunkName: "tcRestaurantsIconChunk" */ './icons/tcRestaurants.svg');
const TCShoppingIcon = () => import(/* webpackChunkName: "tcShoppingIconChunk" */ './icons/tcShopping.svg');
const TCTransfersIcon = () => import(/* webpackChunkName: "tcTransfersIconChunk" */ './icons/tcTransfers.svg');
const TCTransportIcon = () => import(/* webpackChunkName: "tcTransportIconChunk" */ './icons/tcTransport.svg');
const TCTravelIcon = () => import(/* webpackChunkName: "tcTravelIconChunk" */ './icons/tcTravel.svg');
const TCUtilitiesIcon = () => import(/* webpackChunkName: "tcUtilitiesIconChunk" */ './icons/tcUtilities.svg');
const TicketIcon = () => import(/* webpackChunkName: "ticketIconChunk" */ './icons/ticket.svg');
const TouchIdIcon = () => import(/* webpackChunkName: "touchIdIconChunk" */ './icons/touchId.svg');
const TouchidIcon = () => import(/* webpackChunkName: "touchIdAlternateIconChunk" */ './icons/touchIdAlternate.svg');
const ToysIcon = () => import(/* webpackChunkName: "toysIconChunk" */ './icons/toys.svg');
const TransferColorIcon = () => import(/* webpackChunkName: "transferColorIconChunk" */ './icons/transferColor.svg');
const TransferIcon = () => import(/* webpackChunkName: "transferIconChunk" */ './icons/transfer.svg');
const TransferMicroillustration = () => import(/* webpackChunkName: "transferMicroillustrationIconChunk" */ './icons/transferMicroillustration.svg');
const TravelInsuranceIcon = () => import(/* webpackChunkName: "travelInsuranceIconChunk" */ './icons/travelInsurance.svg');
const TvIcon = () => import(/* webpackChunkName: "tvIconChunk" */ './icons/tv.svg');
const TvMicroillustration = () => import(/* webpackChunkName: "tvMicroillustrationIconChunk" */ './icons/tvMicroillustration.svg');
const TwitterDarkIcon = () => import(/* webpackChunkName: "twitterDarkBlueIconChunk" */ './icons/twitterDarkBlue.svg');
const TwitterIcon = () => import(/* webpackChunkName: "twitterIconChunk" */ './icons/twitter.svg');
const UberIcon = () => import(/* webpackChunkName: "uberIconChunk" */ './icons/uber.svg');
const UnlockIcon = () => import(/* webpackChunkName: "unlockIconChunk" */ './icons/unlock.svg');
const UnlockCoinsIcon = () => import(/* webpackChunkName: "unlockCoinsIconChunk" */ './icons/unlockCoins.svg');
const UpdateAppIcon = () => import(/* webpackChunkName: "updateAppIconChunk" */ './icons/updateApp.svg');
const UpIcon = () => import(/* webpackChunkName: "upIconChunk" */ './icons/up.svg');
const UserCheckIcon = () => import(/* webpackChunkName: "userCheckIconChunk" */ './icons/userCheck.svg');
const UserEditIcon = () => import(/* webpackChunkName: "editUserIconChunk" */ './icons/editUser.svg');
const UserIdIcon = () => import(/* webpackChunkName: "userIdIconChunk" */ './icons/userId.svg');
const UserIdentityCardIcon = () => import(/* webpackChunkName: "userIdentityCardIconChunk" */ './icons/userIdentityCard.svg');
const UserInfoIcon = () => import(/* webpackChunkName: "userInfoIconChunk" */ './icons/userInfo.svg');
const UserLanaIcon = () => import(/* webpackChunkName: "userLanaIconChunk" */ './icons/userLana.svg');
const UserMoneyIcon = () => import(/* webpackChunkName: "userMoneyIconChunk" */ './icons/userMoney.svg');
const UserShieldIcon = () => import(/* webpackChunkName: "userShieldIconChunk" */ './icons/userShield.svg');
const VectorIcon = () => import(/* webpackChunkName: "vectorIconChunk" */ './icons/vector.svg');
const VerifyEmailIcon = () => import(/* webpackChunkName: "verifyEmailIconChunk" */ './icons/verifyEmail.svg');
const VideoIcon = () => import(/* webpackChunkName: "videoIconChunk" */ './icons/video.svg');
const ViewIcon = () => import(/* webpackChunkName: "viewIconChunk" */ './icons/view.svg');
const ViewMoreIcon = () => import(/* webpackChunkName: "viewMoreIconChunk" */ './icons/viewMore.svg');
const ViewMoreVerticalIcon = () => import(/* webpackChunkName: "viewMoreVerticalIconChunk" */ './icons/viewMoreVertical.svg');
const ViewoffIcon = () => import(/* webpackChunkName: "viewOffIconChunk" */ './icons/viewOff.svg');
const VoiceIcon = () => import(/* webpackChunkName: "voiceIconChunk" */ './icons/voice.svg');
const VoiceUpdatedIcon = () => import(/* webpackChunkName: "voiceUpdatedIconChunk" */ './icons/voiceUpdated.svg');
const ColorWalletIcon = () => import(/* webpackChunkName: "ColorWalletIconChunk" */ './components/ColorWalletIcon/ColorWalletIcon.vue');
const WaitingSheepIcon = () => import(/* webpackChunkName: "waitingSheepIconChunk" */ './icons/waitingSheep.svg');
const WalletIcon = () => import(/* webpackChunkName: "walletIconChunk" */ './icons/wallet.svg');
const WarningBoldIcon = () => import(/* webpackChunkName: "warningBoldIconChunk" */ './icons/warningBold.svg');
const WarningIcon = () => import(/* webpackChunkName: "warningIconChunk" */ './icons/warning.svg');
const WarningLineIcon = () => import(/* webpackChunkName: "warningLineIconChunk" */ './icons/warningLine.svg');
const WarningMicroillustration = () => import(/* webpackChunkName: "warningMicroillustrationIconChunk" */ './icons/warningMicroillustration.svg');
const WarningSheep = () => import(/* webpackChunkName: "warningSheepIconChunk" */ './icons/warningSheep.svg');
const WaterIcon = () => import(/* webpackChunkName: "water */ './icons/water.svg');
const WelcomeImage = () => import(/* webpackChunkName: "welcomeIconChunk" */ './icons/welcome.svg');
const WhatsappIcon = () => import(/* webpackChunkName: "whatsappIconChunk" */ './icons/whatsapp.svg');
const WheelBrokenIcon = () => import(/* webpackChunkName: "wheelBrokenIconChunk" */ './icons/wheelBroken.svg');
const WheelIcon = () => import(/* webpackChunkName: "wheelIconChunk" */ './icons/wheel.svg');
const WorkInProgressIcon = () => import(/* webpackChunkName: "workInProgressIconChunk" */ './icons/workInProgress.svg');

export {
  AccountIcon,
  AccountUpgradeIcon,
  AddBeneficiaryIcon,
  AddBoldIcon,
  AddIcon,
  AddLineIcon,
  AddUserIcon,
  AnimatedSleepingSheep,
  ArrowBackIcon,
  ArrowDownBoldIcon,
  ArrowDownLineIcon,
  ArrowUpBoldIcon,
  ArrowUpLineIcon,
  AtmIcon,
  AttachmentIcon,
  BackIcon,
  BalanceIcon,
  BankIcon,
  BankAccountIcon,
  BarcodeIcon,
  BeachIcon,
  BeatsIcon,
  BikeIcon,
  BillIcon,
  BlankCardImage,
  BlueGemIcon,
  BoltIcon,
  BoxIcon,
  BuildingIcon,
  CabifyIcon,
  CalculatorCashIcon,
  CalculatorColorIcon,
  CalculatorIcon,
  CalendarIcon,
  CalendarCabifyIcon,
  CalendarCoinsIcon,
  CalendarColorIcon,
  CalendarErrorIcon,
  CameraIcon,
  CameraImage,
  CameraMicroillustration,
  CardBlockIcon,
  CardBlockedImage,
  CardBrokenIcon,
  CardBrokenImage,
  CardCheckIcon,
  CardDeleteIcon,
  CardIcon,
  CardImage,
  CardLockIcon,
  CardMobileIcon,
  CardMinimalIcon,
  CardNullIcon,
  CardPinIcon,
  CardRenewalIcon,
  CardShieldIcon,
  CardUnlocked,
  CarBrokenIcon,
  CarColorIcon,
  CarDamaged,
  CarIcon,
  CarInsuranceIcon,
  CashIcon,
  CashPaymentBillIcon,
  CashPaymentIcon,
  ChatIcon,
  CheckboxCheckedIcon,
  CheckboxUncheckedIcon,
  CheckBoldIcon,
  CheckCircleIcon,
  CheckColorIcon,
  CheckIcon,
  CheckLineIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronsRightIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
  ClearNotificationsIcon,
  ClockColorIcon,
  ClockIcon,
  CloseBoldIcon,
  CloseIcon,
  CloseLineIcon,
  CoinsColorIcon,
  CoinIcon,
  CoinsIcon,
  ColorLockIcon,
  ColorSecurityIcon,
  ColorSmartphoneIcon,
  ColorUmbrellaIcon,
  ColorWalletIcon,
  CollapseSmallIcon,
  CollectIcon,
  CommissionsIcon,
  ConnectCabifyImage,
  ContractIcon,
  CopyIcon,
  CurrencyDecreaseIcon,
  CurrencyIncreaseIcon,
  DeleteIcon,
  DeleteKeyIcon,
  DeleteMinimalIcon,
  DepositCloseIcon,
  DepositOpenIcon,
  DepositIcon,
  DescriptionAddedIcon,
  DescriptionIcon,
  DetailsIcon,
  DeviceInsuranceIcon,
  DidiIcon,
  DisabilityIcon,
  DiscountIcon,
  DocumentAddedIcon,
  DocumentEditIcon,
  DocumentFilledIcon,
  DocumentMedicIcon,
  DocumentNullIcon,
  DocumentOkIcon,
  DollarBoldIcon,
  DollarLineIcon,
  DownIcon,
  DrivingLicenseIcon,
  EarnCoins,
  EditIcon,
  EditMinimalIcon,
  EntertainmentIcon,
  EraseIcon,
  ErrorConnection,
  ErrorMicroillustration,
  EuroBoldIcon,
  EuroLineIcon,
  ExpandSmallIcon,
  FacebookDarkIcon,
  FacebookIcon,
  FaceIdBlueIcon,
  FaceIdIcon,
  FaceScanIcon,
  FaqIcon,
  FavoriteOffIcon,
  FavoriteOnIcon,
  FilterIcon,
  FillInfoIcon,
  FinanceIcon,
  FlashOffIcon,
  FlashOnIcon,
  ForwardIcon,
  ForwardSmallIcon,
  FuelColorIcon,
  FuelIcon,
  GamePadIcon,
  GasIcon,
  GemIcon,
  GovernmentIcon,
  HealthIcon,
  HealthAffiliationIcon,
  HealthCardIcon,
  HealthInsuranceIcon,
  HelpBoldIcon,
  HelpColorIcon,
  HelpIcon,
  HelpLineIcon,
  HouseIcon,
  ImageIcon,
  InfoIcon,
  InfoMicroillustration,
  InfoLineIcon,
  InstagramDarkIcon,
  InstagramIcon,
  InsuranceIcon,
  InvestIcon,
  InvestmentIcon,
  JobIcon,
  KnowledgeUserInfo,
  LanaAccountIcon,
  LanaAccountMicroillustration,
  LanaAppIcon,
  LanaCardIcon,
  LanaCardAtmIcon,
  LanaCardDelayImage,
  LanaCardEmptyIcon,
  LanaCardNewImage,
  LanaCardArrivedImage,
  LanaCardSendIcon,
  LanaCardSmallIcon,
  LanaSimShippedIcon,
  LandlinePhoneIcon,
  LightIcon,
  LinkedinDarkIcon,
  LinkedinIcon,
  ListIcon,
  LocationColorIcon,
  LocationHomeIcon,
  LocationIcon,
  LocationTargetIcon,
  LockCircleIcon,
  LockIcon,
  Logo,
  LogoImage,
  LogOutIcon,
  MailColorIcon,
  MailIcon,
  MailIllustration,
  MapImage,
  MedalIcon,
  MedicBoxIcon,
  MenuIcon,
  MessageBoldIcon,
  MessageIcon,
  MessageLineIcon,
  MicroappIcon,
  MicroappMicroillustration,
  MobileIcon,
  MoneyBagIcon,
  MoneyBagColorIcon,
  MoneyIcon,
  MopErrorIcon,
  MopIcon,
  MopPendingIcon,
  MopSpinnerIcon,
  MopSuccessIcon,
  MoreIcon,
  MoveMoneyIcon,
  NotificationsClearedIcon,
  NotificationsIcon,
  PaymentsIcon,
  PayIcon,
  PdfIcon,
  PendingMicroillustration,
  PercentageMicroillustration,
  PersonIcon,
  PetRunningImage,
  PhoneIcon,
  PhoneCrookedIcon,
  PhoneMoneyIcon,
  PhoneWorkInProgressIcon,
  PigIcon,
  PigMoneyIcon,
  PinIcon,
  PlugMicroillustration,
  PlusMicroillustration,
  PresentIcon,
  ProductsIcon,
  PromptCashLocationImage,
  PromptLocationImage,
  PromptLocationWarning,
  PromptPermissionsImage,
  PromptSelfieImage,
  QrcardIcon,
  QrCodeIcon,
  RappiIcon,
  RecordIcon,
  ReloadIcon,
  RequestIcon,
  ResizeIcon,
  RfcIcon,
  RocketIcon,
  RotateDeviceIcon,
  RotateIcon,
  RotateLandscapeIcon,
  RotatePortraitIcon,
  SaveMoneyIcon,
  SavingsIcon,
  ScanIcon,
  ScanFailureImage,
  ScanSuccessImage,
  ScooterIcon,
  SearchIcon,
  SearchAtmIcon,
  SecurityIcon,
  SelfieIcon,
  SelfiePictureIcon,
  SendIcon,
  ServerIcon,
  ServicesColorIcon,
  ServicesIcon,
  SetPinImage,
  SettingsColorIcon,
  SettingsIcon,
  ShareAndroidIcon,
  ShareIcon,
  ShareIosIcon,
  SheepIcon,
  ShieldIcon,
  ShopMicroillustration,
  ShoppingIcon,
  ShoppingSmallIcon,
  SignIcon,
  SimIcon,
  SleepingSheepIcon,
  SmallCircleIcon,
  SmsIcon,
  SnowFlakeIcon,
  SpeakerIcon,
  StarsIcon,
  StarsMicroillustration,
  SuccessImage,
  SuccessInfoImage,
  SuccessMicroillustration,
  SuccessPhoneImage,
  SupportColorIcon,
  SupportChatLineIcon,
  SupportIcon,
  TaxesIcon,
  TCBusinessIcon,
  TCCashIcon,
  TCGroceriesIcon,
  TCHealthIcon,
  TCIncomeIcon,
  TCLeisureIcon,
  TCRestaurantsIcon,
  TCShoppingIcon,
  TCTransfersIcon,
  TCTransportIcon,
  TCTravelIcon,
  TCUtilitiesIcon,
  TicketIcon,
  TouchIdIcon,
  TouchidIcon,
  ToysIcon,
  TransferColorIcon,
  TransferIcon,
  TransferMicroillustration,
  TravelInsuranceIcon,
  TvIcon,
  TvMicroillustration,
  TwitterDarkIcon,
  TwitterIcon,
  UberIcon,
  UnlockIcon,
  UnlockCoinsIcon,
  UpdateAppIcon,
  UpIcon,
  UserCheckIcon,
  UserEditIcon,
  UserIdIcon,
  UserIdentityCardIcon,
  UserInfoIcon,
  UserLanaIcon,
  UserMoneyIcon,
  UserShieldIcon,
  VectorIcon,
  VerifyEmailIcon,
  VideoIcon,
  ViewIcon,
  ViewMoreIcon,
  ViewMoreVerticalIcon,
  ViewoffIcon,
  VoiceIcon,
  VoiceUpdatedIcon,
  WaitingSheepIcon,
  WalletIcon,
  WarningBoldIcon,
  WarningIcon,
  WarningLineIcon,
  WarningMicroillustration,
  WarningSheep,
  WaterIcon,
  WelcomeImage,
  WhatsappIcon,
  WheelBrokenIcon,
  WheelIcon,
  WorkInProgressIcon,
};

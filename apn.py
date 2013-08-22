#encode:utf-8  

import APNSWrapper
import binascii
  
deviceToken = binascii.unhexlify('f4cf62ec70ae87a7d9ed919433310f1c4daad1f44fad2cd7690f3f695c2c5982')   


wrapper = APNSWrapper.APNSNotificationWrapper('./apns/pcert.pem', False)
message = APNSWrapper.APNSNotification()
message.token(deviceToken)
message.appendProperty(APNSWrapper.APNSProperty('mdm', 'C4180E25-EB1B-4CAB-B778-594089ECC6B4'))
wrapper.append(message)
wrapper.notify()

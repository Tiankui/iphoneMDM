
var cert_path = '../../apns/cert.pem';
var keys_path = '../../apns/key.pem';

var token
="9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=,REFUQQAABPRWRVJTAAAABAAAAANUWVBFAAAABAAAAAJVVUlEAAAAEAEkUVsLoUHSph5d8ceoU7VITUNLAAAAKDCwxQ94YKklHbc0maQ7vFRkU0qAVZxBQkEI8Uyxb8BgyPtI4xgs++1XUkFQAAAABAAAAAFTQUxUAAAAFBAVXPxDW1hEIdRHF1JdXCCGub/ZSVRFUgAAAAQAAMNQVVVJRAAAABCgvG3i2xlEb7buvQlEEGBnQ0xBUwAAAAQAAAABV1JBUAAAAAQAAAADS1RZUAAAAAQAAAAAV1BLWQAAAChlHKK12QPqLsTPCGiq9fNm+gV6LEGUdlkJ1QEQNQbutXG8ovQQpuubVVVJRAAAABBQSeO2JW5Fbr1m482rfTvjQ0xBUwAAAAQAAAACV1JBUAAAAAQAAAADS1RZUAAAAAQAAAABV1BLWQAAACiphPPOgW887BzycuH1hxO2kR9O/7rtQzkAAknTBusKbEx19++fNi0fUEJLWQAAACA0QQKFDyVBAhsQuOMR88LwVLmAc5cRaGretst0QfWsX1VVSUQAAAAQVAgC68nNRs6Q0tpmsiHt1UNMQVMAAAAEAAAAA1dSQVAAAAAEAAAAA0tUWVAAAAAEAAAAAFdQS1kAAAAoqAUUbZfe6y0uxuvo6fQ+FJsTcxBFbyJvBISQ1dWu4gehfoPgEnGZblVVSUQAAAAQUljDzQHwTRqMIXy45swU3kNMQVMAAAAEAAAABVdSQVAAAAAEAAAAA0tUWVAAAAAEAAAAAFdQS1kAAAAont3ZhCuCzkiwJvRCA5TchABQTV9DcWMg8DgeE7TBRptI/gWklD1vBlVVSUQAAAAQBkuvAdMGT6mHMwiruG4DSUNMQVMAAAAEAAAABldSQVAAAAAEAAAAA0tUWVAAAAAEAAAAAFdQS1kAAAAo6yU7RIZ+g7fytQi7/9N5hM1QV504UCzxBZTZH59ln10v+VoPV5QFuFVVSUQAAAAQBcVf/t4NQJazqKVW672f3ENMQVMAAAAEAAAAB1dSQVAAAAAEAAAAA0tUWVAAAAAEAAAAAFdQS1kAAAAonZjGGr78XU9aadZ0yXpELa4S85uL5yeFYARZ6BZ4LV17z3u/K0trt1VVSUQAAAAQj/ruxWLBQeKOoRffNIjBUUNMQVMAAAAEAAAACFdSQVAAAAAEAAAAA0tUWVAAAAAEAAAAAFdQS1kAAAAo24CSER1HURz5stVc6EJrjjxAw+0wS9kOEHJJoh1IHl+KF3BMZ3veIFVVSUQAAAAQCod9P+6rTl2Aw0GOeOlZi0NMQVMAAAAEAAAACVdSQVAAAAAEAAAAA0tUWVAAAAAEAAAAAFdQS1kAAAAo+2R8hQfe3Tm3BfX5K38ivEG8XP5wFC+eMSs9se/1RlU6V3F+gXnz5lVVSUQAAAAQ5s/t0WFVQN2M812FyywLaENMQVMAAAAEAAAACldSQVAAAAAEAAAAA0tUWVAAAAAEAAAAAFdQS1kAAAAoYw5DEArx9J9uHu3c5aumlInfpLj2AYmjGcu2DxIhMZaO1D4p6/4KF1VVSUQAAAAQg0GPD8xcRKSOWD6VJCgtNENMQVMAAAAEAAAAC1dSQVAAAAAEAAAAA0tUWVAAAAAEAAAAAFdQS1kAAAAo8In8fgr56mx8NbipMEoLSQhuaLqTitPfpsLR9f5yNYd7+DKYlR5xiVNJR04AAAAUn9aLNnd/p+wV0Agm3Tpeh0422NA=";
var push_magic = '6A40DF84-6F6B-4491-8656-0040E147EED1';
var APNS = require('../../apns').createServer(cert_path, keys_path);
console.log(new Buffer(token).toString('ascii'));
APNS.notify(new Buffer(token).toString("ascii"), push_magic);
//APNS.end();

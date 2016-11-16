# ng2-textarea-component

##Documentation##
	text area ใช้ในการรับค่าและแสดงผลข้อความ
 
##Attributes##

Require | Attribute   | Type        | Description
------- |----------   | -----       | -------------
*       |id           | *text*      | ใช้สำหรับระบุ id ของ text area
*       |name         | *text*      | ใช้สำหรับระบุ name ของ text area
        |label        | *text*      | ใช้สำหรับใส่ข้อความใน label ของ text area
        |row          | *number*    | ใช้กำหนดความสูงของ text area หากไม่กำหนด จะมีความสูง = 2 บรรทัด
        |require      | *boolean*   | ใช้กับ text area ที่จำเป็นต้องระบุค่า โดยหากระบุค่า require ="true" จะแสดง * หลัง label
        |disable      | *boolean*   | ใช้กำหนดเพื่อปิดใช้งาน text area โดยหากระบุค่า disable="true" จะไม่สามารถใช้งานหรือ copy ข้อความใน text area ได้
        |readonly     | *boolean*   | ใช้กำหนดให้ไม่สามารถแก้ไขข้อมูลใน text area ได้
        |maxlength    | *number*    | ใช้กำหนดความยาวตัวอักษรสูงสุดที่สามารถพิมพ์ได้ใน text area หากไม่ระบุจะมีค่า = 524288 ตัวอักษร
        |defaultValue | *text*      | ใช้กำหนดข้อความที่ต้องการแสดงใน text area
        |colorTheme   | *text*      | ใช้กำหนดสีของ text area โดยค่าที่สามารถระบุได้ ประกอบด้วย success=สีเขียว, info=สีฟ้า, warning=สีส้ม, danger=สีแดง

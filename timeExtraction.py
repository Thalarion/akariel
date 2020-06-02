import re

regex12or24hour = r'(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](AM|PM)|([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]'

with open('input.txt', 'r', encoding = 'utf8') as file:
    input_text = file.read().replace('\n', '')

for timestamp in re.finditer(regex12or24hour, input_text.upper()):
    item = timestamp.group(0)
    if item.find("AM") == 8:
        if item.find("12") == 0:
            item = "00" + item[2:8]
        else:
            item = item[0:8]
    elif item.find("PM") == 8:
        if item.find("12") == 0:
            item = item[0:8]
        else:
            hours = int(item[0:2]) + 12
            item = str(hours) + item[2:8]
    with open('output.txt', 'a') as output:
        output.write(item + '\n')
import requests

curr_content = "Hier könnten Ihre Songtexte stehen"

with open("text.txt", "r", encoding="utf-8") as file:
    curr_content = file.read()

payload = {"text": curr_content}
requests.post("http://localhost:3001/notify", json=payload)

while True:
    with open("text.txt", "r", encoding="utf-8") as file:
        new_content = file.read()
        #print(content)
        if new_content != curr_content:
            curr_content = new_content
            print("text changed")
            payload = {"text": curr_content}
            requests.post("http://localhost:3001/notify", json=payload)
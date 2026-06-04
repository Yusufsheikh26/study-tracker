subject = input("Subject: ")
hours = input("Hours studied: ")
topic = input("Topic covered: ")
with open("study_data.txt", "a") as file:
    file.write(f"{subject},{hours},{topic}\n")
    
print("Saved successfully!")
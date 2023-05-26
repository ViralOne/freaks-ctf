import time

def send_message(sender, recipient, message):
    print(f"\n[Message Sent] From: {sender}\n[Message Sent] To: {recipient}\n[Message Sent] Message: {message}\n")
    time.sleep(1)  # Simulating message sending delay

def receive_message(sender, recipient, message):
    print(f"\n[Message Received] From: {sender}\n[Message Received] To: {recipient}\n[Message Received] Message: {message}\n")
    time.sleep(1)  # Simulating message receiving delay

def perform_social_engineering():
    # Step 1: Set up the conversation
    print("Setting up the conversation...")
    time.sleep(1)
    worker_name = "John"  # Worker's name (can be customized)
    attacker_name = input("Enter your name (attacker): ")
    print(f"\nWelcome, {attacker_name}! You are now connected with {worker_name}.\n")

    # Step 2: Conversation loop
    while True:
        # Attacker sends a message
        attacker_message = input(f"{attacker_name}: ")
        send_message(attacker_name, worker_name, attacker_message)

        # Worker receives the message
        time.sleep(1)  # Simulating worker's response delay
        receive_message(attacker_name, worker_name, attacker_message)

        # Worker responds
        worker_response = input(f"{worker_name}: ")
        send_message(worker_name, attacker_name, worker_response)

        # Attacker receives the response
        time.sleep(1)  # Simulating attacker's response delay
        receive_message(worker_name, attacker_name, worker_response)

        # Check if the attacker convinces the worker to give access to a file
        if "access file" in worker_response.lower():
            print(f"\n{worker_name} will send the needed data\n")
            time.sleep(2)
            print(f"\The Tor Node is being changed please wait...\n")
            time.sleep(2)
            print(f"\No internet connection.\n")
            time.sleep(5)
            print(f"\Secured Internet connection thorugh Frankfurt Tor node was re-established\n")
            time.sleep(2)
            print(f"\nNuclear Reactor URL: http://192.168.10.69:3131\n")
            break

    print("Social engineering attack successful!")
    print("Exiting the program...")

# Main program
print("==== Social Engineering Terminal ====")
print("Prepare to execute a social engineering attack.")
print("Follow the instructions carefully.\n")

while True:
    choice = input("Enter 'start' to begin the attack or 'exit' to quit: ")
    if choice.lower() == 'start':
        perform_social_engineering()
    elif choice.lower() == 'exit':
        break
    else:
        print("Invalid choice. Please try again.\n")

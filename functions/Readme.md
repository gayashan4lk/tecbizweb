# Create Env
```shell
python3.11 -m venv venv
```

# Activate env
```shell
. "venv/bin/activate" && python3.11 -m pip install -r requirements.txt
```

# Install firebase cli
https://firebase.google.com/docs/cli/

# Login to firebase
```shell
firebase login
```

# Setup Emulator
```shell
firebase init
```
And select setup emulators only

# Serve
```shell
firebase serve --only functions        
```
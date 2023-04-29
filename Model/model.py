import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import LSTM, Dense

# Load the dataset in a dataframe object and preprocess the data
url = "./investments.csv"
df = pd.read_csv(url)
df.dropna(inplace=True)
df.set_index('date', inplace=True)
scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(df)

# Split the data into train and test sets
train_data = scaled_data[:int(0.8*len(df))]
test_data = scaled_data[int(0.8*len(df)):]

# Define the training and testing inputs and outputs
def create_dataset(data, look_back=1):
    X, Y = [], []
    for i in range(len(data)-look_back-1):
        X.append(data[i:(i+look_back), :])
        Y.append(data[(i+look_back), 0])
    return np.array(X), np.array(Y)

look_back = 60 # Number of past days to use for prediction
train_X, train_Y = create_dataset(train_data, look_back)
test_X, test_Y = create_dataset(test_data, look_back)

# Define the LSTM model
model = Sequential()
model.add(LSTM(units=50, return_sequences=True, input_shape=(train_X.shape[1], train_X.shape[2])))
model.add(LSTM(units=50))
model.add(Dense(1))
model.compile(loss='mean_squared_error', optimizer='adam')

# Train the LSTM model
model.fit(train_X, train_Y, epochs=100, batch_size=64, validation_data=(test_X, test_Y), verbose=2)

# Save the LSTM model and scaler
model.save('lstm_model.h5')
joblib.dump(scaler, 'scaler.pkl')
print("Models saved!")

# Saving the data columns from training
model_columns = list(x.columns)
joblib.dump(model_columns, 'model_columns.pkl')
print("Models columns dumped!")
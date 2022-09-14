package com.testproj; // replace com.your-app-name with your app’s name

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.testproj.ReactNativeFileManager;
import android.media.MediaMetadataRetriever;
import wseemann.media.FFmpegMediaMetadataRetriever;
import android.os.Environment;
import android.util.Log;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableMap;
import android.graphics.BitmapFactory;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableArray;
import android.graphics.Bitmap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.bridge.ReadableMap;

public class GetAlbumModule extends ReactContextBaseJavaModule {
	GetAlbumModule(ReactApplicationContext context) {
		super(context);
	}

	@Override
	public String getName() {
		return "GetAlbumModule";
	}

	WritableArray jsonArray = new WritableNativeArray();

	@ReactMethod
	public void getMusicAlbumImage(ReadableArray songs, final Callback successCallback,
			final Callback errorCallback) {
		for (int i = 0; i < songs.size(); i++) {
			ReadableMap tmpArray = songs.getMap(i);

			final String path = tmpArray.getString("uri");
			final String id = tmpArray.getString("id");

			getImgs(path.replace("file://", ""),
					id);
		}
		successCallback.invoke(jsonArray);

	}

	private void getImgs(String path, String songId) {
		WritableMap items;
		ReactNativeFileManager fcm = new ReactNativeFileManager();
		MediaMetadataRetriever mmr = new MediaMetadataRetriever();
		mmr.setDataSource(path);

		String encoded = "";
		String blurred = "";
		try {
			items = new WritableNativeMap();
			byte[] albumImageData = mmr.getEmbeddedPicture();

			if (albumImageData != null) {
				Bitmap songImage = BitmapFactory.decodeByteArray(albumImageData, 0, albumImageData.length);

				try {
					String pathToImg = Environment.getExternalStorageDirectory() + "/" + songId + ".jpg";
					encoded = fcm.saveImageToStorageAndGetPath(pathToImg, songImage);
					items.putString("cover", "file://" + encoded);
				} catch (Exception e) {
					// Just let images empty
					Log.e("error in image", e.getMessage());
				}

				try {
					String pathToImg = Environment.getExternalStorageDirectory() + "/" + songId + "-blur.jpg";
					blurred = fcm.saveBlurImageToStorageAndGetPath(pathToImg, songImage);
					items.putString("blur", "file://" + blurred);
				} catch (Exception e) {
					Log.e("error in image-blured", e.getMessage());
				}
			}

			jsonArray.pushMap(items);

		} catch (Exception e) {
			Log.e("embedImage", "No embed image");

		}
	}
}

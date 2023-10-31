from firebase_functions import https_fn
from firebase_admin import initialize_app, firestore
import datetime

app = initialize_app()


@https_fn.on_request()
def create_conversion(req: https_fn.Request) -> https_fn.Response:

    data = req.get_json()
    id = data.get('id')
    word_document_name = data.get('word_document_name')
    word_document_id = data.get('word_document_id')
    uploader_id = data.get('uploader_id')
    original_text = data.get('original_text')
    converted_text = data.get('converted_text')
    

    current_datetime = datetime.datetime.now()

    document_data = {
        'id': id,
        'word_document_name': word_document_name,
        'word_document_id': word_document_id,
        'uploader_id': uploader_id,
        'original_text': original_text,
        'converted_text': converted_text,
        'created_date': current_datetime,
        'updated_date': current_datetime,
        'is_deleted': False 
    }
    
   
    db = firestore.client()
    
   
    doc_ref = db.collection('conversion_items').document()
    doc_ref.set(document_data)
    
  
    return https_fn.Response(f"Conversion created successfully!")

@https_fn.on_request()
def update_conversion(req: https_fn.Request) -> https_fn.Response:
    
    data = req.get_json()
    id = req.args.get('id')  
    
    # Initialize Firestore client
    db = firestore.client()
    
    # Fetch the document from Firestore using id
    doc_ref = db.collection('conversion_items').document(id)
    doc = doc_ref.get()
    
    if doc.exists:
        # Update the necessary fields in the document
        doc_ref.update({
            'word_document_name': data.get('word_document_name'),
            'word_document_id': data.get('word_document_id'),
            'uploader_id': data.get('uploader_id'),
            'original_text': data.get('original_text'),
            'converted_text': data.get('converted_text'),
            'updated_date': datetime.datetime.now()
        })
        return https_fn.Response(f"Conversion with ID {id} updated successfully!")
    else:
        return https_fn.Response(f"Conversion with ID {id} not found!", status=404)

@https_fn.on_request()
def read_conversion(req: https_fn.Request) -> https_fn.Response:
    # id = req.param.get('id')    # Extracting ID from the URL params
    id = req.args.get('id')
    
    # Initialize Firestore client
    db = firestore.client()
    
    # Fetch the document from Firestore using id
    doc_ref = db.collection('conversion_items').document(id)
    doc = doc_ref.get() 
    
    if doc.exists:
        # Return the fetched document as a JSON response
        return https_fn.Response(doc.to_dict())
    else:
        return https_fn.Response(f"Conversion with ID {id} not found!", status=404)

@https_fn.on_request()
def delete_conversion(req: https_fn.Request) -> https_fn.Response:
    #id = req.param.get('id')  
    id = req.args.get('id')
    
    # Initialize Firestore client
    db = firestore.client()
    
    # Delete the document from Firestore using id
    doc_ref = db.collection('conversion_items').document(id)
    doc = doc_ref.get()
    
    if doc.exists:
        doc_ref.delete()
        return https_fn.Response(f"Conversion with ID {id} deleted successfully!")
    else:
        return https_fn.Response(f"Conversion with ID {id} not found!", status=404)


package AEMLearnProj.core.models;

import static org.apache.sling.api.resource.ResourceResolver.PROPERTY_RESOURCE_TYPE;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.settings.SlingSettingsService;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;

import AEMLearnProj.core.services.SampleService;

@Model(adaptables = Resource.class)
public class SampleComponent {

	@ValueMapValue(name=PROPERTY_RESOURCE_TYPE, injectionStrategy=InjectionStrategy.OPTIONAL)
    @Default(values="No resourceType")
    protected String resourceType;
	@SlingObject
	private Resource currentResource;
	@SlingObject
	private ResourceResolver resourceResolver;
	@OSGiService
	private SlingSettingsService settings;
	@OSGiService
	private SampleService sampleService;
	private String message;
	
	final List<String> fruitsList = new ArrayList<String>();
	
	@PostConstruct
	protected void init() {
		PageManager pageManager = resourceResolver.adaptTo(PageManager.class);
		Page currentPage = pageManager.getContainingPage(currentResource);
		fruitsList.add("apple");
		fruitsList.add("banana");
		fruitsList.add("orange");
//		message = resourceType+ " "+ currentPage.getPath();
	}
	
	public String getMessage() {
        return message;
    }
	
	public Object[] fruitList(){
		return fruitsList.toArray();
	}
}

package AEMLearnProj.core.models;

import javax.annotation.PostConstruct;
import javax.jcr.Session;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import com.day.cq.wcm.api.Page;

@Model(adaptables= {SlingHttpServletRequest.class})
@Exporter(name="jackson", extensions ="json")
public class SampleExporter {

	@Self
	private SlingHttpServletRequest request;

	@Self
	private Resource resource;

	@SlingObject
	private ResourceResolver resourceResolver;
//
	@ScriptVariable(name="currentPage")
	private Page page;
//
	private String title;
	private String sessionID;
	
	@PostConstruct
	private void init() {
		title = page.getTitle();
		sessionID = resourceResolver.adaptTo(Session.class).getUserID();
	}
	
	public String getTitle() {
		return StringUtils.defaultIfEmpty(title, "defaultTitle");
	}
	
	public String getSession() {
		return StringUtils.defaultString(sessionID);
	}
}
